<template lang="">
  <section class="auth">
    <div class="container">
      <form @submit.prevent="onSubmit" class="auth__form">
        <AppInput type="email" v-model="user.email">Login:</AppInput>
        <AppInput type="password" v-model="user.password">Password:</AppInput>

        <div class="controls">
          <AppButton>Login!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authUser", this.user)
        .then((res) => {
          this.$router.push("/admin/");
          // console.log(res);
          // Reset
        })
        .catch((e) => {
          this.user.email = "";
          this.user.password = "";
          console.log(e);
        });
    },
  },
};
</script>
<style lang="scss">
.auth {
  text-align: center;
}
.auth__form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 70vh;

  input {
    min-width: 460px;
  }
}
</style>
