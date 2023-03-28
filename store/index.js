import axios from "axios";
// import {$axios} from '@nuxtjs/axios'

export const state = () => ({
  postsLoaded: [],
});

export const mutations = {
    addPost (state, post){
        console.log(post);
        state.postsLoaded.push(post)
    }
};

export const actions = {
   addPost({commit}, post) {
    // console.log(post);
    return axios.post("https://blog-nuxt-eff9a-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json", post)
      .then((res) => {
        const postItem = {...post, id:res.data.name}
        console.log(postItem);
        commit('addPost', postItem)
      })
      .catch(e=> console.log(e))
  },
};

export const getters = {};
