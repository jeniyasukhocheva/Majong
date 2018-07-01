import Vue from 'vue';
import Router from 'vue-router';
import Start from '../components/Start';
import Game from '../components/Game';
import Finish from '../components/Finish';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:      '/',
      name:      'Start',
      component: Start,
    },
    {
      path:      '/game',
      name:      'Game',
      component: Game,
    },
    {
      path:      '/finish',
      name:      'Finish',
      component: Finish,
    },
  ],
});
