import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PostRequest from '../views/PostRequest.vue'
import TutorList from '../views/TutorList.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/post', component: PostRequest },
  { path: '/tutors', component: TutorList }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
