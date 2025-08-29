import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './pages/HomeView.vue'
import AboutView from './pages/AboutView.vue'
import StudyView from './pages/StudyView.vue'
import Ex_A1 from './pages/Ex_A1.vue'
import Ex_B2 from './pages/Ex_B2.vue'
import Ex_WebDesign from './pages/Ex_WebDesign.vue'
import Menu1_1 from './components/main_menu1/Menu1_1.vue'
import Menu1_2 from './components/main_menu1/Menu1_2.vue'
import Menu1_3 from './components/main_menu1/Menu1_3.vue'
import Menu1_4 from './components/main_menu1/Menu1_4.vue'

const routes = [
  { path: '/', component: HomeView},
  { path: '/about', component: AboutView },
  { path: "/study", component: StudyView},
  {
    path: "/wd",
    component: Ex_WebDesign,
    children: [
      {
        path: "a1",
        component: Ex_A1,
      },
      {
        path: "b2",
        component: Ex_B2,
        // 이 부분이 중요합니다! 하위 경로를 children으로 정의합니다.
        children: [
            {
                path: 'menu1',
                component: Menu1_1
            },
            {
                path: 'menu2',
                component: Menu1_2
            },
            {
                path: 'menu3',
                component: Menu1_3
            },
             {
                path: 'menu4',
                component: Menu1_4
            }
        ]
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory('/vue-site/'),
  routes,
})

export default router
// import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import HomeView from './pages/HomeView.vue'
// import AboutView from './pages/AboutView.vue'
// import StudyView from './pages/StudyView.vue'
// import Ex_A1 from './pages/Ex_A1.vue'
// import Ex_B2 from './pages/Ex_B2.vue'
// import Ex_WebDesign from './pages/Ex_WebDesign.vue'
// import Menu1_1 from './components/main_menu1/Menu1_1.vue'
// import Menu1_2 from './components/main_menu1/Menu1_2.vue'
// import Menu1_3 from './components/main_menu1/Menu1_3.vue'

// const routes = [
//   { path: '/', component: HomeView },
//   { path: '/about', component: AboutView },
//   { path: "/study", component: StudyView },
//   {
//     path: "/wd",
//     component: Ex_WebDesign,
//     children: [
//       { path: "a1", component: Ex_A1 },
//       { path: "b2", component: Ex_B2 }
//     ]
//   },
//   { path: "/wd/b2/menu1", component: Menu1_1 },
//   { path: "/wd/b2/menu2", component: Menu1_2 },
//   { path: "/wd/b2/menu3", component: Menu1_3 }
// ]

// const router = createRouter({
//   // createWebHistory 대신 createWebHashHistory를 사용합니다.
//   // 이 방식은 정적 서버 환경에서 404 오류를 방지합니다.
//   history: createWebHashHistory(),
//   routes,
// })

// export default router

  // createWebHistory
  // history: createWebHistory(),
// export default router