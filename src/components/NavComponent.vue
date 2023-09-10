<template>
  <div id="fake-nav">
    <a href="#register" @click="open('register')">Register</a>
    <a href="#login" @click="open('login')">Login</a>
  </div>
</template>

<script>
export default {
  methods: {
    open(which) {
      this.$emit("open", which);
    },
  },
};
</script>

<style scoped></style>
