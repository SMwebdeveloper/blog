<template lang="">
    <div>
        <div class="posts">
            <input type="text" v-model="postId">
            <button @click="loadPost">Get Post</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            postId:''
        }
    },
    methods: {
        loadPost () {
            this.$router.push(`/posts/${this.postId}`)
        }
    }
}
</script>
<style lang="">
</style>