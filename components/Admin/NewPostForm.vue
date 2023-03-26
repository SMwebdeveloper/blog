<template lang="">
    <section class="new-post">
        <div class="container">
            <form @submit.prevent>
                <AppInput v-model="post.title">Title:</AppInput>
                <AppInput v-model="post.descr">Descr:</AppInput>
                <AppInput v-model="post.img">Img Link:</AppInput>
                <AppTextarea v-model="post.content">Content:</AppTextarea>

                <div class="controls">
                    <AppButton @click="cancel" class="btnDanger">Cancel</AppButton>
                    <AppButton @click="onSubmit">Save</AppButton>
                </div>
            </form>
        </div>
    </section>
</template>
<script>
export default {
    props:{
        postEdit:{
            type:Object,
            required:false
        }
    },
    data () {
        return {
            post:this.postEdit ? {...this.postEdit} :{
                title:'',
                descr:'',
                img:'',
                content:''
            }
        }
    },
    methods:{
        onSubmit(){
            this.$emit('submit', this.post)
        },
        cancel(){
            this.$router.push('/admin/')
        }
    }
}
</script>
<style lang="scss" scoped>
.controls{
text-align: center;
margin: 30px 0;
}
</style>