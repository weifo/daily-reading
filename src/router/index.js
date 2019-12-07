import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index.vue';
import NewsDetail from '@/pages/NewsDetail.vue';
import Comment from '@/pages/Comment.vue';
import WirteComment from '@/pages/WriteComment.vue';
import ThemeDetail from '@/pages/ThemeDetail.vue';
import EditorsList from '@/pages/EditorsList.vue';
import Editor from '@/pages/Editor.vue';
import Collect from '@/pages/Collect.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/newsDetail/:id',
      name: 'newsDetail',
      component: NewsDetail
    },
    {
      path: '/comment/:id',
      name: 'comment',
      component: Comment
    },
    {
      path: '/writeComment/:id',
      name: 'writeComment',
      component: WirteComment
    },
    {
      path: '/themeDetail/:id',
      name: 'themeDetail',
      component: ThemeDetail
    },
    {
      path: '/editorsList/:id',
      name: 'editorsList',
      component: EditorsList
    },
    {
      path: '/editor/:editorId/:editorName',
      name: 'editor',
      component: Editor
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect
    }
  ]
});
