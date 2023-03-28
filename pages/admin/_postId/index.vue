<template lang="">
  <div>
    <NewPostForm @submit="onSubmit" :postEdit="post"/>
  </div>
</template>
<script>
import NewPostForm from "@/components/Admin/NewPostForm.vue";
import axios from "axios";
export default {
  components: {
    NewPostForm,
  },
  layout:'admin',
  asyncData(contex) {
      return axios.get(`https://blog-nuxt-eff9a-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${contex.params.postId}.json`)
      .then(res => {
        return {
          post: {...res.data, id:contex.params.postId}
        }
      })
      .catch((e)=> contex(e))
  },
  layout: "admin",
  methods: {
    onSubmit(post) {
      console.log("Post editing!");
      this.$store.dispatch('editPost', post)
      .then(() => {
        this.$router.push('/admin')
      })
    },
  },
};
</script>
<style lang=""></style>
