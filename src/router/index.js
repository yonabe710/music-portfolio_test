import Vue from 'vue'
import Router from 'vue-router'
import MyPage from '@/components/MyPage'
import Main from '@/components/Main'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import Editor from '@/components/Editor'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/mypage/',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/mypage/:twitterid',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor,
      meta: { requiresAuth: true }
    },
    {
      path: '/:twitterid',
      name: 'Main',
      component: Main,
      meta: { requiresAuth: true }
    },
    {
      path: '/editor/:twitterid',
      name: 'Editor',
      component: Editor
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router
