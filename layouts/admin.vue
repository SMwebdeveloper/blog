<template lang="">
  <div class="container">
      <Header />
      <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Admin Page">
        <nuxt-link to="/admin" class="link linkWhite">Admin</nuxt-link>
        <nuxt-link to="/admin/new-post" class="link linkWhite">New Post</nuxt-link>
        <nuxt-link to="/admin/comments" class="link linkWhite">Comments:</nuxt-link>
      </Intro>
    </div>
    <Nuxt />
  </div>
</template>
<script>
import Header from "../components/system/Header.vue";
export default {
  middleware:'auth',
  components: {
    Header,
  }
};
</script>
<style lang=""></style>
