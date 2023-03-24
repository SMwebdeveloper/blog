<template lang="">
    <section class="contact">
        <div class="container">
            <h2 class="title"> Contact me!</h2>
            <form @submit.prevent="onSubmit" class="contact-form">
                <label>Name:</label>
                <input v-model="user.name" type="text">
                <label>Email:</label>
                <input v-model="user.email" type="text" >
                <label>Text:</label>
                <textarea v-model="user.text"></textarea>


                <!-- buttons  -->
                <div class="controls">
                    <AppButton class="btnWhite">Submit!</AppButton>
                </div>
            </form>
        </div>
    </section>
</template>
<script>
import AppButton from '@/components/UI/Controls/Button.vue';
export default {
    components:{
        AppButton
    },
    data () {
        return {
            user:{
                name:'',
                email:'',
                text:'',
            }
        }
    },
    methods:{
        onSubmit () {
            console.log(this.user);
        }
    }
}
</script>
<style lang="scss">
.contact {
    text-align: center;
    background: #4f68f4;
    color: #fff;
     
    .title{
        color: #fff;
    }
    .contact-form{
        max-width: 600px;
        margin: 30px auto;
    }

    .controls{
        margin: 30px 0;
    }
}
</style>