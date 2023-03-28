<template lang="">
  <newPostForm @submit="btnSubmit" />
</template>
<script>
import newPostForm from "@/components/Admin/NewPostForm.vue";
export default {
    layout:'admin',
  components: {
    newPostForm,
  },
  methods: {
    btnSubmit(post) {
      this.$store.dispatch("addPost", post)
        .then(() => {
            console.log(22);
            this.$router.push('/admin')
        })
    },
  },
};
</script>
<style lang=""></style>
