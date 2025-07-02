import { createRouter, createWebHistory } from 'vue-router';
import Posts from '../Components/Pages/Posts.vue';
import Users from '../Components/Pages/Users.vue';
import Comments from '../Components/Pages/Comments.vue';
import Albums from '../Components/Pages/Albums.vue';
import Photos from '../Components/Pages/Photos.vue';
import Todos from '../Components/Pages/Todos.vue';


const routes = [
  { path: '/posts', component: Posts },
  { path: '/users', component: Users },
  { path: '/comments', component: Comments },
  { path: '/albums', component: Albums },
  { path: '/photos', component: Photos },
  { path: '/todos', component: Todos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
