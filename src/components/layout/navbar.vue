<template>
  <div class="nav-container">
    <div class="nav-left">
      <div class="logo-container"><img src="../../assets/logo.png" />人事管理系统</div>
      <div class="menu-container"></div>
    </div>
    <div class="nav-right">
        <i class="el-icon-bell"></i>
    </div>
  </div>
</template>
<style lang="scss">
$theme-color:#2B3D53; 
.nav-container{
    background: $theme-color;
    width: 100%;
    z-index: 0;
    display: flex;
    align-items: center;
    height: 60px;
    line-height: 60px;
    color: #fff;
    justify-content: space-between;
    min-width: 1610px;
    .nav-left{
        img{
            height: 20px;
            width: 20px;
            border-radius:10px;
            padding-right: 10px;
        }
    }
}
</style>