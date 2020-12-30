declare module 'vue'
declare module "*.vue" { 
  import Vue from "vue"; 
  export default Vue; 
}

// Expansion
declare module 'vue/types/vue' {
  import { RouteLocationNormalizedLoaded, Router } from 'vue-router'
  interface Vue {
    $router: Router,
    $route: RouteLocationNormalizedLoaded
  }
}