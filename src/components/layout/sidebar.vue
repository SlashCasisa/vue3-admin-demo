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
export default {
  components: {
    sidebarItem,
  },
  setup(context) {
    const routes = computed(() => {
      //    return this.$store.state.sidebar_routes;
      return [{
          path: "/",
          meta: {
            icon: "",
            title: "人力管理",
          },
          redirect: {
            path: "/manpowerResources",
          },
          children: [
            {
              path: "/manpowerResources",
              meta: {
                title: "人力资源",
                icon: "",
              },
            },
          ],
        },
      ];
    });
    const activeMenu = () => {
      const route = useRoute();
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    };
    console.log(routes,'routes')
    return {
      routes,
      activeMenu,
    };
  },
};
</script>
<style lang="scss">
.sidebar-container {
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 3px 0px 0px 0px;
    width: 248px;
    min-width: 248px;
    background-position: right;
    height: calc(100vh - 60px);
    position: relative;
    z-index: 1;

    .el-menu-item.is-active {
        background: #EDF4FF !important;
        color: #5F94FF!important;
        &::after{
          position: absolute;
          left: 0;
          top: 0;
          content: '';
          width: 10px;
          height:100%;
          background: #5F94FF;
        }
    }

    .el-menu-item,
    .el-submenu__title {
        color: #000!important;
        &:hover {
            background: #EDF4FF !important;
            color: #5F94FF!important;
        }

        i {
            color: #5F94FF !important;
        }
    }

    .scrollbar-wrapper {
        overflow-x: hidden;
    }
}

.el-menu {
    border-right: 0 !important;
}

.app-menu-container {
    height: calc(100vh - 200px);
}
</style>