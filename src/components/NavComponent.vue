<template>
  <div id="fake-nav">
    <a href="#register" @click="open('register', $event)">Register</a>
    <a href="#login" @click="open('login', $event)">Login</a>
  </div>
</template>

<script>
export default {
  methods: {
    open(which, e) {
      e.preventDefault();
      this.$emit("open", which);
    },
  },
};
</script>

<style scoped>
/* Any component-specific styles can be added here */
</style>
