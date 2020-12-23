import Vue from 'vue'
import {Router, _RouteLocationBase} from 'vue-router'
declare module "*.vue" {
  // import { ComponentOptions } from 'vue'
  // const componentOptions: ComponentOptions
  // export default componentOptions
  import Vue from "vue"
  export default Vue
}
// Expansion
declare module 'vue/types/vue' {
  interface Vue {
    $router: Router,
    $route: _RouteLocationBase
  }
}
// import Vue from 'vue'
// import VueRouter ,{Route}from 'vue-router'
// declare module "*.vue"{
//   import Vue from "vue"
//   export default vue
// }
// declare module 'vue/types/vue' {
//   interface Vue {
//     $router: VueRouter,
//     $route: Route
//   }
// }