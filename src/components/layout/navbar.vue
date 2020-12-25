<template>
  <div class="nav-container">
    <div class="nav-left">
      <div class="logo-container"><img src="../../assets/img/logo.png" />恒睿人事管理云平台</div>
      <div class="menu-container">
        <el-menu
          class="admin-top-menu"
          :default-active="activeMenu()"
          active-text-color="#fff"
          mode="horizontal"
          background-color="transparent"
          text-color="#fff"
          @select="handleSelect"
        >
          <el-menu-item
            :index="resolvePath(item.path)"
            v-for="item in routes"
            :key="item.path"
          >
            <template #title>
              <span v-if="item.meta && item.meta.title" slot="title">{{
                item.meta.title
              }}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="nav-right">
      <i class="el-icon-bell"></i>
    </div>
  </div>
</template>
<script lang="ts">
import path from "path";
import { useRoute, useRouter } from "vue-router";
import Store from "../../store/store";
import { defineComponent, provide, ref, inject, Ref } from "vue";
export default {
  setup() {
    //path:要查找的路由变量路径
    //routes：路由数组
    //first_path：返回的第一个变量路由路径
    const filteroneRoutes = (path, routes, first_path) => {
      //查找当前的首级路由
      for (let i = 0; i < routes.length; i++) {
        if (routes[i].path === path) {
          if (first_path === null) {
            //如果有first_pat有值则说明不是第一次调用递归
            first_path = routes[i].path;
            return first_path;
          } else {
            //如果first_path:undefined则说明是第一次调用
            return first_path;
          }
        } else if (routes[i].children && routes[i].children.length > 0) {
          if (first_path === null) {
            let data = filteroneRoutes(path, routes[i].children, routes[i].path);
            if (data) {
              return data;
            }
          } else {
            let data2 = filteroneRoutes(path, routes[i].children, first_path);
            if (data2) {
              return data2;
            }
          }
        }
      }
    };
    const useRouters = useRouter().options.routes;
    const handleMenu = () => {
      let arr = [];
      for (let item of useRouters) {
        if (!item.hidden) {
          arr.push(item);
        }
      }
      return arr;
    };
    const routes = handleMenu();
    const push_sidebar_routes = (first_path) => {

      for (let i = 0; i < useRouters.length; i++) {
        if (useRouters[i] && useRouters[i].path === first_path) {
          let sidebarRoutes = inject<Ref<Array<any>>>(Store.sidebarRoutes);
          sidebarRoutes.value = useRouters[i].children;
        }
      }
    };
    const route = useRoute();
    const activeMenu = () => {
      //激活当前地址的第一级菜单
      const { meta, path } = route;
      let first_path = filteroneRoutes(path, routes, null);
      push_sidebar_routes(first_path);
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return first_path;
    };
    const resolvePath = (routePath) => {
      const isExternal = (routePath) => /^(https?:|mailto:|tel:)/.test(routePath);
      if (isExternal(routePath)) {
        return routePath;
      }
      return path.resolve(routePath);
    };
    return {
      activeMenu,
      routes,
      resolvePath,
    };
  },
  methods: {
    handleSelect(val) {
      this.$router.push({
        path: val,
      });
    },
  },
};
</script>
<style lang="scss">
.nav-container {
  background: var(--c1);
  width: 100%;
  z-index: 0;
  display: flex;
  align-items: center;
  height: 65px;
  line-height: 65px;
  color: var(--c3);
  justify-content: space-between;
  min-width: 1610px;
  .nav-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-container {
      width: 236px;
      padding-left: 30px;
      display: flex;
      align-items: center;
      font-size:18px;
    }
    img {
      height: 28px;
      width: 28px;
      border-radius: 10px;
      margin-right: 10px;
    }
  }
}
.menu-container {
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item {
    height: 65px;
    line-height: 65px;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    background-color: rgb(90, 104, 121) !important;
    border-bottom: none;
  }
}
</style>
