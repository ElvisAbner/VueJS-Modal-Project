<template>
  <!-- Your template code here -->
</template>

<script>
import NavComponent from "./components/NavComponent.vue";
import ModalComponent from "./components/ModalComponent.vue";

// Import the CSS file
import "@/assets/modal-styles.css"; // Adjust the path if needed

export default {
  components: {
    NavComponent,
    ModalComponent,
  },
  data() {
    return {
      modalActive: null,
    };
  },
  methods: {
    openModal(which) {
      this.modalActive = which;
    },
    closeModal() {
      this.modalActive = null;
    },
  },
};
</script>

<style scoped>
/* Any component-specific styles can be added here */
</style>
