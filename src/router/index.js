import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import NewPost from '../views/posts/Create'
import TableOfPost from '../views/posts/Table'
import ShowThePost from '../views/posts/Show'
import EditPost from '../views/posts/Edit'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/posts/create',
    name: 'posts.create',
    component: NewPost
  },
  {
    path: '/posts/table',
    name: 'posts.table',
    component: TableOfPost
  },
  {
    path: '/posts/:postSlug',
    name: 'posts.show',
    component: ShowThePost
  },
  {
    path: '/posts/:postSlug/edit',
    name: 'posts.edit',
    component: EditPost
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
