<template>
  <div id="app">
    <header>
      <h1>My Vue.js Application</h1>
    </header>
    <nav>
      <div>
        <p><a href="#register" @click="openModal('register')">Register</a></p>
        <p><a href="#login" @click="openModal('login')">Login</a></p>
      </div>
    </nav>
    <main>
      <ModalComponent
        v-if="modalActive"
        @close="closeModal"
        :active="modalActive"
      />
    </main>
    <footer>
      <p>&copy; 2023 My Vue.js App</p>
    </footer>
  </div>
</template>

<script>
import NavComponent from "./components/NavComponent.vue";
import ModalComponent from "./components/ModalComponent.vue";

import "@/assets/modal-styles.css"; // Import the CSS file

export default {
  components: {
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
@import "./assets/modal-styles";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
