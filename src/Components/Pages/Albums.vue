<template>
    <div class="container">
      <h1>Posts</h1>
      <div class="cards">
        <div v-for="post in posts" :key="post.id" class="card">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        posts: [],
      };
    },
    mounted() {
      axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
          this.posts = response.data;
        });
    }
  }
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .card {
    border: 1px solid #ccc;
    padding: 15px;
    width: 250px;
    border-radius: 8px;
  }
  </style>
  