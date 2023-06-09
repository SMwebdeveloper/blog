import axios from "axios";
import Cookie from "js-cookie";

export const state = () => ({
  postsLoaded: [],
  token:null
});

export const mutations = {
  setPosts(state, posts) {
    state.postsLoaded = posts;
  },
  addPost(state, post) {
    // console.log(post);
    state.postsLoaded.push(post);
  },
  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(
      (post) => post.id === postEdit.id
    );
    state.postsLoaded[postIndex] = postEdit;
  },
  setToken(state, token){
    console.log(token);
    state.token = token
  },
  destroyToken(state){
    state.token = null
  }
};

export const actions = {
  // server init
  nuxtServerInit({ commit }, contex) {
    return axios
      .get(
        "https://blog-nuxt-eff9a-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
      )
      .then((res) => {
        const posts = [];
        for (let key in res.data) {
          posts.push({ ...res.data[key], id: key });
        }
        console.log(posts);
        commit("setPosts", posts);
      })
      .catch((error) => console.log(error));
  },
  // auth user
  authUser({commit}, authData){
    const key = 'AIzaSyAXei2MlAJN0lk5VkPQIUNkV-4FYlhNaJc'
    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
      email:authData.email,
      password:authData.password,
      returnSecureToken:true
    })
    .then((res) => {
      let token = res.data.idToken
      commit('setToken', token)
      // local storage
      localStorage.setItem('token', token)
      // Cookie
      Cookie.set('jwt', token)
    })
    .catch(e=> console.log(e))
  },
  // initAuth
  initAuth({commit}, req){
    let token

    if(req){
      if(!req.headers.cookie) return false
      const jwtCookie = req.headers.cookie
            .split(';')
            .find(t => t.trim().startsWith('jwt='))
      if(!jwtCookie) return false
      token = jwtCookie.split('=')[1]
    } else{
      token = localStorage.getItem('token')
      if (!token)  return false
    }
    commit('setToken', token)
  },
  // log out
  logoutUser({commit}){
    commit('destroyToken')
    localStorage.removeItem('token')
    Cookie.remove('jwt')
  },
  // add post
  addPost({ commit }, post) {
    // console.log(post);
    return axios
      .post(
        "https://blog-nuxt-eff9a-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
        post
      )
      .then((res) => {
        const postItem = { ...post, id: res.data.name };
        // console.log(postItem);
        commit("addPost", postItem);
      })
      .catch((e) => console.log(e));
  },
  // edit post
  editPost({ commit, state}, post) {
    return axios
      .put(
        `https://blog-nuxt-eff9a-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${post.id}.json?=${state.token}`,
        post
      )
      .then((res) => {
        commit("editPost", post);
      })
      .catch((e) => console.log(e));
  },
  // addComment
  addComment({commit}, comment) {
    return axios
      .post(
        `https://blog-nuxt-eff9a-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json`,
        comment
      )
      .catch(e => console.log(e))
  },
};

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded;
  },
  checkAuthUser(state){
    return state.token != null
  }
};
