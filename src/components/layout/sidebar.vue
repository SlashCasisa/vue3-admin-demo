<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu()"
        active-text-color="#fff"
        background-color="transparent"
        text-color="#fff"
        class="app-menu-container"
      >
        <sidebarItem v-for="item in routes" :key="item.path" :item="item" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" >
import sidebarItem from "./sidebarItem.vue";
import { computed } from "vue";
import {useRoute} from 'vue-router'
import { inject, Ref} from 'vue'
import Store from "../../store/store"
export default {
  components: {
    sidebarItem,
  },
  setup(context) {
    const routes = computed(() => {
      //    return this.$store.state.sidebar_routes;
      const sidebarRoutes = inject < Ref <Array<any> >>(Store.sidebarRoutes)
      return sidebarRoutes.value
    });
    const activeMenu = () => {
      const route = useRoute();
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    };
    
    return {
      routes,
      activeMenu,
    };
  },
};
</script>
<style lang="scss">

.sidebar-container {
    background: var(--c3);
    box-shadow: rgba(0, 0, 0, 0.1) 3px 0px 0px 0px;
    width: 248px;
    min-width: 248px;
    background-position: right;
    height: calc(100vh - 60px);
    position: relative;
    z-index: 1;

    .el-menu-item.is-active {
        background: var(--c4) !important;
        color:var(--c5)!important;
        &::after{
          position: absolute;
          left: 0;
          top: 0;
          content: '';
          width: 10px;
          height:100%;
          background: var(--c5);
        }
        i {
            color: var(--c5)!important;
        }
    }

    .el-menu-item,
    .el-submenu__title {
        color: var(--c11)!important;
        &:hover {
            background: var(--c4) !important;
            color: var(--c5)!important;
            i {
              color: var(--c5)!important;
            }
        }

        i {
            color: var(--c11)!important;
        }
    }

    .scrollbar-wrapper {
        overflow-x: hidden;
    }
    .el-menu {
      border-right: 0 !important;
      text-align: center;
      font-size: var(--title-size);
      .navbar-icon{
        font-size: 18px;
        padding-right: 10px;
      }
    }
}



.app-menu-container {
    height: calc(100vh - 200px);
}
</style>