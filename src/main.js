import { createApp } from "vue";
import App from "./App.vue";
import ModalComponent from "./components/ModalComponent.vue";

createApp(App).component("modal-component", ModalComponent).mount("#app");
