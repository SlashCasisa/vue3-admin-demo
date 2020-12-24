<template>
<div id="app">
    <router-view />
</div>
</template>

<script>
import Store from "./store/store"
import {defineComponent, provide, ref} from 'vue'
// export default {
//   name: 'App',
//   setup(){
//     provide('sidebarRoutes', ref([])) 
//   }
// }
export default defineComponent({
  setup() {
    provide(Store.sidebarRoutes, ref([]))
  }
})
</script>
