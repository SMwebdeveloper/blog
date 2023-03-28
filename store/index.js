import axios from "axios";

export const state = () => ({
  postsLoaded: [],
  commentsLoaded:[]
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
  addComment(state, comment){
    console.log(comment);
    state.commentsLoaded.push(comment)
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
  editPost({ commit }, post) {
    return axios
      .put(
        `https://blog-nuxt-eff9a-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${post.id}.json`,
        post
      )
      .then((res) => {
        commit("editPost", post);
      })
      .catch((e) => console.log(e));
  },
  // addComment
  addComment({ commit }, comment) {
    return axios
      .put(
        `https://blog-nuxt-eff9a-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json`,
        comment
      )
      .then(() => {
        commit("addComment", { ...comment, id:res.data.name });
      })
      .catch(e => console.log(e))
  },
};

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded;
  },
};
