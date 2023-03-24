<template lang="">
  <section class="new-comment">
    <div class="container">
      <form @submit.prevent="onSubmit" class="contact-form">
        <!-- name -->
        <AppInput v-model="comment.name">Name:</AppInput>
        <!-- text -->
        <AppTextarea v-model="comment.text">Text:</AppTextarea>
        <!-- buttons  -->
        <div class="controls">
          <AppButton>Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import AppButton from '@/components/UI/Controls/Button.vue';
import AppInput from '@/components/UI/Controls/Input.vue';
import AppTextarea from '@/components/UI/Controls/Textarea.vue';
export default {
    components:{
        AppButton,
        AppInput,
        AppTextarea
    },
  data() {
    return {
      comment: {
        name: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.comment);
    },
  },
};
</script>
<style lang="scss">
.new-comment {
  text-align: center;
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }
}
</style>
