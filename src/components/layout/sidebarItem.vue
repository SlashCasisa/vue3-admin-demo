<template>
<div class="sidebarItem">
    <template v-if="!item.children&&!item.meta.hidden">
        <router-link :to="resolvePath(item.path)">
            <el-menu-item :index="resolvePath(item.path)">
                <template #title>
                    <i class="iconfont navbar-icon" :class="`${item.meta.icon}`" />
                    <span v-if="item.meta && item.meta.title" slot="title">{{ item.meta.title }}</span>
                </template>
            </el-menu-item>
        </router-link>
    </template>
    <template v-if="item.children">
        <el-submenu :index="resolvePath(item.path)" popper-append-to-body>
            <template #title>
                <i class="iconfont navbar-icon" :class="`${item.meta.icon}`" />
                <span v-if="item.meta && item.meta.title" slot="title">{{ item.meta.title }}</span>
            </template>

            <template v-if="item.children">
                <sidebarItem v-for="child in item.children" :key="child.path" :item="child" />
            </template>
        </el-submenu>
    </template>
</div>
</template>
<script lang="ts" >
import path from 'path'
declare const props: {item: Object}
export default {
    props:{
        item:{
            type: Object,
            required: true,
            default() {
                return ''
            }
        }
    },
    setup(props) {
        const resolvePath = (routePath) =>{
            // console.log(routePath, 'routdddd')
            const isExternal = (routePath) => /^(https?:|mailto:|tel:)/.test(routePath)
            if (isExternal(routePath)) {
                return routePath
            }
            return path.resolve(routePath)
        }
        return {
            resolvePath
        }
    },
}
</script>

