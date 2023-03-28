<template lang="">
  <div class="wrapper-content wrapper-content--fixed">
   <post :post="post"/>
   <comments :comments="comments"/>
   <newComment/>
  </div>
</template>
<script>
import axios from 'axios';

import post from '@/components/Blog/Post.vue';
import newComment from '@/components/Comments/NewComment.vue';
import comments from '@/components/Comments/Comments.vue';
export default {
    components:{
      post,
      newComment,
      comments
    },
   async asyncData (context) {
      let [post, comments] = await Promise.all([
        axios.get(`https://blog-nuxt-eff9a-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${context.params.id}.json`),
        axios.get(`https://blog-nuxt-eff9a-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json`)
      ])
      return {
        post:post.data,
        comments:comments.data
      }
    },
  // data() {
  //   return {
  //     post: {
  //       id: 1,
  //       title: "1 post",
  //       descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //       content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //       img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     },
  //     comments:[
  //       {name:'Alex', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
  //       {name:'Evgenii', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
  //     ]
  //   };
  // },
};
</script>
<style lang="scss">
.post {
    max-width: 900px;
    margin: 0 auto;
}

.post-header{
    text-align: center;
    margin-bottom: 30px;

    img{
        max-width: 400px;
    }

    p{
        color: #999;
    }
}
.post-body{
    text-align: center;
}
</style>
