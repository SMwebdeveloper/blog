<template lang="">
    <div>
        <NewPostForm @submit="onSubmit"/>
    </div>
</template>
<script>
import NewPostForm from '@/components/Admin/NewPostForm.vue';
export default {
    components:{
        NewPostForm
    },
    layout:'admin',
    methods:{
        onSubmit(post) {
            console.log('Post added!!');
            console.log(post);
        }
    }
}
</script>
<style lang="">
    
</style>