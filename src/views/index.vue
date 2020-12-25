<template>
  <div>
    <navbar/>
    <div class="main-contianer">
      <sidebar/>
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import navbar from "../components/layout/navbar.vue"
import sidebar from "../components/layout/sidebar.vue"
export default {
    components:{
        navbar,
        sidebar
    }
}
</script>
<style scoped>
.main-contianer{
  display: flex;
  background: #f7f7f7;
}
</style>