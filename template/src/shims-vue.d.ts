import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    // $message: any;
  }
}

declare global {
  interface Window {
    [p: string]: any;
  }
}
