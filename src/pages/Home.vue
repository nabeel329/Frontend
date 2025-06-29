<template>
  <div class="home">
    <h1>{{ greeting }}</h1>
    
    <button @click="goToUsers" class="btn">{{ buttonText }}</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ROUTES } from '../constants/routes.js'

export default defineComponent({
  name: 'Home',
  data() {
    return {
      // No reactive data needed for this component
    }
  },
  computed: {
    greeting() {
      return 'Hello'
    },
    buttonText() {
      return 'Go to Users'
    }
  },
  methods: {
    goToUsers() {
      this.$router.push(ROUTES.USERS)
    }
  }
})
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

h1 {
  font-size: 4rem;
  margin-bottom: 2rem;
  color: #42b883;
}

.btn {
  padding: 12px 24px;
  font-size: 1.2rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #369870;
}
</style> 