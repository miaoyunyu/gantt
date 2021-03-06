import Vue from 'vue';
import App from './App.vue';
import Gantt from './components/Gantt.vue';
import GanttHistory from './components/GanttHistory.vue';
import GanttTest from './components/GanttTest.vue';
import Router from 'vue-router';






Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Gantt
    },
    {
      path: '/Gantt',
      component: Gantt
    },
    {
      path: '/GanttHistory',
      component: GanttHistory
    },{
      path: '/GanttTest',
      component: GanttTest
    },
  ]
});

import './styles/quasar.styl';
import iconSet from 'quasar/icon-set/mdi-v3.js';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/mdi-v3/mdi-v3.css';
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel
} from 'quasar';

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel
  },
  directives: {},
  plugins: {},
  iconSet: iconSet
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');



