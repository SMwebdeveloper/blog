<template lang="">
  <section class="not-found">
    <div class="container">
      <div class="not-found__wrapper">
        <p class="title">Page Not Found</p>
        <nuxt-link to="/"> <span>&larr;</span> Back to main page</nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
.not-found__wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 80vh;
}
</style>
