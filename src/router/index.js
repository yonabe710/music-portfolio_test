import Vue from 'vue'
import Router from 'vue-router'
import MyPage from '@/components/MyPage'
import Main from '@/components/Main'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import ytEditor from '@/components/ytEditor'
import twEditor from '@/components/twEditor'
import scEditor from '@/components/scEditor'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: { requiresAuth: true }
    },
    {
      path: '/mypage/',
      name: 'MyPage',
      component: MyPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/mypage/:twitterid',
      // name: 'MyPage',
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
      path: '/yteditor',
      name: 'YtEditor',
      component: ytEditor,
      meta: { requiresAuth: true }
    },
    {
      path: '/tweditor',
      name: 'TwEditor',
      component: twEditor,
      meta: { requiresAuth: true }
    },
    {
      path: '/sceditor',
      name: 'ScEditor',
      component: scEditor,
      meta: { requiresAuth: true }
    },
    {
      path: '/:twitterid',
      // name: 'Main',
      component: Main,
      meta: { requiresAuth: true }
    },
    {
      path: '/yteditor/:twitterid',
      // name: 'YtEditor',
      component: ytEditor
    },
    {
      path: '/tweditor/:twitterid',
      // name: 'TwEditor',
      component: twEditor
    },
    {
      path: '/sceditor/:twitterid',
      // name: 'ScEditor',
      component: scEditor
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
