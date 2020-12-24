import { RouteLocationNormalizedLoaded, Router } from 'vue-router'
declare module 'vue'
declare module "*.vue" { 
  import { ComponentOptions } from "vue"; 
  const componentOptions: ComponentOptions;
  export default componentOptions; 
}

// Expansion
declare module 'vue/types/vue' {
  interface Vue {
    $router: Router,
    $route: RouteLocationNormalizedLoaded
  }
}