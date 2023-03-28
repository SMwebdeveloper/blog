import axios from "axios";

export const state = () => ({
  postsLoaded: [],
});

export const mutations = {
  setPosts(state, posts) {
    state.postsLoaded = posts
  },
  addPost(state, post) {
    // console.log(post);
    state.postsLoaded.push(post);
  },
};

export const actions = {
  nuxtServerInit({ commit }, contex) {
    return axios.get(
      "https://blog-nuxt-eff9a-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
    )
    .then((res) => {
      const posts = []
      for(let key in res.data){
        posts.push({...res.data[key], id:key})
      }
      console.log(posts);
      commit('setPosts', posts)
    }).catch(error => console.log(error))
  },
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
};

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded;
  },
};
