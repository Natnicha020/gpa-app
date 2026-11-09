// import { useAuthStore } from '@/stores/authStore';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/Ex_qcard.vue') },
      { path: 'second', component: () => import('@/pages/SecondPage.vue') },
      { path: 'button', component: () => import('@/pages/Ex_qbtn.vue') },
      { path: 'list', component: () => import('@/pages/Ex_qlist.vue') },
      { path: 'table', component: () => import('@/pages/Ex_qtable.vue') },
      { path: 'notify', component: () => import('@/pages/Ex_Notify.vue') },
      { path: 'load', component: () => import('@/pages/Ex_Loading.vue') },
      { path: 'log', component: () => import('@/pages/Ex_Dialog.vue') },
      { path: 'vava', component: () => import('@/pages/Ex_validation.vue') },
      { path: 'pp', 
        component: () => import('@/pages/ch5/ExPinia.vue'),
         meta: { requiresAuth: true}
      },
      { path: 'aa', component: () => import('@/pages/ch6/Ex_api.vue') },
      { path: 'post', component: () => import('@/pages/ch6/Ex_crud.vue') },
      { path: 'sj', component: () => import('@/pages/ch6/SubjectPage.vue') },
      { path: 'login', name: 'login' ,
        component: () => import('@/pages/ch7/LoginPage.vue') },
      { path: 'profile', name:'profile', 
        meta: {requiresAuth: true },
        component: () => import('@/pages/ch7/ProfilePage.vue') },
        { path: 'teacher', name:'teacher', 
        meta: {requiresAuth: true, roles: ['teacher','admin']},
        component: () => import('@/pages/ch7/TeacherPage.vue') },
        { path: 'admin', name:'admin', 
        meta: {requiresAuth: true, roles: ['admin']},
        component: () => import('@/pages/ch7/AdminPage.vue') },
        { path: 'env', component: () => import('@/pages/ch8/Ex_env.vue') },
        { path: 'sub', component: () => import('@/pages/ch8/SubjectPage.vue') },
  
  
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
]

export default routes
