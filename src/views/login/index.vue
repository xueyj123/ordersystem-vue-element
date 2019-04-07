<template>
  <div class="login">
    <h1>login</h1>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "login",
  methods: {
    ...Vuex.mapMutations(["setLogin"]),
    login() {
      this.setLogin();

      console.log(this.$route);
      const name = this.$route.query.redirect
        ? { name: this.$route.query.redirect }
        : "/";

      this.$router.replace(name);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>