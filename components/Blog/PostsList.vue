<template lang="">
  <section class="post-list">
    <div class="container">
      <div class="posts__wrapper">
        <postPreview v-for="post in posts" :key="post.id" :post="post" :admin="admin"/>
      </div>
    </div>
  </section>
</template>
<script>
import postPreview from '@/components/Blog/PostPreview.vue';
export default {
  components:{postPreview},
    props:{
        posts:{
            type:Array,
            requied:true
        },
        admin:{
          type:Boolean,
          default:false,
        }
    }
};
</script>
<style lang="scss">
.posts__wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
