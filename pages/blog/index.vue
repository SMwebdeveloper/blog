<template>
    <div class="wrapper-content wrapper-content--fixed ">
      <intro title="My lasts posts:"/>
      <postsList :posts="posts"/>
    </div>
  </template>

  <script>
  import intro from '@/components/UI/Intro.vue'
  import postsList from '@/components/Blog/PostsList.vue';

  export default {
    components:{
      intro,
      postsList
    },
    data () {
      return {
        posts:[
          {
            id:1,
            title:'1 post',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img:'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          },
          {
            id:2,
            title:'2 post',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img:'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
          },
          {
            id:3,
            title:'3 post',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img:'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          },
        ]
      }
    }
  }
  </script>
