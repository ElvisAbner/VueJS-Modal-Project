<template>
  <h1>{{ title }}</h1>
  <p>Welcome</p>

  <div v-if="showModal">
  <Modal theme="sale" @close="toggleShowModals">

    <template v-slot:links>
      <a href="#">Sign up now</a>
      <a href="#">More info</a>
    </template>
    
    <h1>{{ header }}</h1>
    <p>{{ text }}</p>
  
  </Modal>
  </div>

  <div v-if="showModalTwo">
    <Modal @close="toggleShowModalsTwo">
      <h1>Sign up to the Newsletter</h1>
      <p>For updates and promo codes!</p>
    </Modal>
  </div>
  
  <button @click="toggleShowModals">Show modal</button>
  <button @click="toggleShowModals2">Show modal 2</button>

</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My first Vue App :)',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your ninja swag for half price!',
      header2nd: 'One Piece',
      text2nd: 'This is the best anime ever!!!',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleShowModals() {
      this.showModal = !this.showModal
    },
    toggleShowModals2() {
      this.showModalTwo = !this.showModalTwo
      }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
button {
  background: #bbb;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin: 10px;
  font-size: 16px;
  color: #333;
}
</style>
