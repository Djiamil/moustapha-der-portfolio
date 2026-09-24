import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../components/Projects.vue'
import Skills from '../components/Skills.vue'
import About from '../components/About.vue'
import Experience from '../components/Experience.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },

    {
      path: "/projects/:id",
      name: "project-details",
      component: ProjectDetails,
    },


  ]
})

export default router