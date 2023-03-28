<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <Intro title="My lasts posts:" />
    <PostsList :posts="postsLoaded" />
    <contacts />
    <!-- <p>{{ posts }}</p> -->
  </div>
</template>

<script>
import promo from "@/components/Promo.vue";
import contacts from "@/components/Contacts.vue";

export default {
  components: {
    promo,
    contacts,
  },
  data(){
    return{
      posts:[]
    }
  },
  // asyncData(context) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         posts: [
  //           {
  //             id: 1,
  //             title: "1 post",
  //             descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //             img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //           },
  //         ],
  //       });
  //     }, 1500);
  //   })
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((e) => {
  //       context.error(e);
  //     });
  // },
  computed:{
    postsLoaded() {
      return this.$store.getters.getPostsLoaded
    }
  }
};
</script>
