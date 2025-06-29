<template>
  <div class="users">
    <h1>{{ pageTitle }}</h1>
    <p class="subtitle">{{ pageSubtitle }}</p>
    
    <button @click="goBack" class="btn">{{ backButtonText }}</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ROUTES } from '../constants/routes.js'

export default defineComponent({
  name: 'Users',
  data() {
    return {
      // No reactive data needed for this component
    }
  },
  computed: {
    pageTitle() {
      return 'Users Page'
    },
    pageSubtitle() {
      return 'This is the users page'
    },
    backButtonText() {
      return 'Go Back'
    }
  },
  methods: {
    goBack() {
      this.$router.push(ROUTES.HOME)
    }
  }
})
</script>

<style scoped>
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #42b883;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
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