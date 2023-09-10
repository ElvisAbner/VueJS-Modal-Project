<template>
  <div
    class="user-modal-container"
    :class="{ active: active }"
    id="login-modal"
    @click="close"
  >
    <!-- Modal content here -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      submitted: null,
      // ... other data properties ...
    };
  },
  methods: {
    close(e) {
      e.preventDefault();
      if (e.target === this.$el) {
        this.active = null;
      }
    },
    // ... other methods ...
  },
};
</script>

<style scoped>
/* Any component-specific styles can be added here */
</style>
