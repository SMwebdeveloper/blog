<template lang="">
  <no-ssr>
    <div class="wrapper">
      <Header />
      <div class="wrapper-content wrapper-content--fixed">
        <Intro title="Admin Page">
          <nuxt-link to="/admin" class="link linkWhite">Admin</nuxt-link>
          <nuxt-link to="/admin/new-post" class="link linkWhite"
            >New Post</nuxt-link
          >
          <nuxt-link to="/admin/comments" class="link linkWhite"
            >Comments:</nuxt-link
          >
          <span @click="logoutUser" class="link linkWhite">Logout</span>
        </Intro>
      </div>
      <Nuxt />
    </div>
  </no-ssr>
</template>
<script>
import Header from "../components/system/Header.vue";
export default {
  middleware: ["auth-check","auth"],
  components: {
    Header,
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser").then(() => {
        this.$router.push("/admin/auth");
      });
    },
  },
};
</script>
<style lang=""></style>
