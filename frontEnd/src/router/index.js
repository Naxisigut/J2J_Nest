import VueRouter from 'vue-router';

import IndexPage from '../pages/IndexPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import ArticleListPage from '../pages/ArticleListPage.vue';
import IntroductionPage from '../pages/IntroductionPage.vue';
import MomentPage from '../pages/MomentPage.vue';
import RecordPage from '../pages/RecordPage.vue';
import ArticlePage from '../pages/ArticlePage.vue';


const Router = new VueRouter({
  routes:[
    {
      path:'/',
      component:IndexPage
    },
    {
      name:'article',
      path:'/article',
      component:ArticlePage
    },
    {
      name:'articleList',
      path:'/articleList',
      component:ArticleListPage,
    },
    {
      name:'about',
      path:'/about',
      component:AboutPage,
    },
    {
      name: 'intro',
      path:'/intro',
      component:IntroductionPage,
    },
    {
      name:'moment',
      path:'/moment',
      component:MomentPage,
    },
    {
      name:'record',
      path:'/record',
      component:RecordPage,
    },
  ]
})

export default Router