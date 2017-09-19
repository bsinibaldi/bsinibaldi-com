import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import VueFire from 'vuefire';
import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDN3fYUMx8GosXoSuJ6qm39IZPs9oFx9oo',
  authDomain: 'bsinibaldi-ffc7d.firebaseapp.com',
  databaseURL: 'https://bsinibaldi-ffc7d.firebaseio.com',
  projectId: 'bsinibaldi-ffc7d',
  storageBucket: 'bsinibaldi-ffc7d.appspot.com',
  messagingSenderId: '232020068982',
};

Firebase.initializeApp(config);
Vue.use(VueFire);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});
