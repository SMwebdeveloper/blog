<template lang="">
  <div>
    <NewPostForm @submit="onSubmit" :postEdit="post"/>
  </div>
</template>
<script>
import NewPostForm from "@/components/Admin/NewPostForm.vue";
export default {
  components: {
    NewPostForm,
  },
  data() {
    return {
      post: {
        id: 1,
        title: "1 post",
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    };
  },
  layout: "admin",
  methods: {
    onSubmit(post) {
      console.log("Post editing!");
      console.log(post);
    },
  },
};
</script>
<style lang=""></style>
