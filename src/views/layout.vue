<template>
    <div class="wrapper">
      <div class="header">
        <h2>欢迎来到云书后台操作系统</h2>
      </div>
      <div class="sidebar">
        <el-menu
          :router="true"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">用户管理</template>
              <el-menu-item index="/layout/index">首页</el-menu-item>
              <el-menu-item index="/layout/users">用户管理</el-menu-item>
              <el-menu-item index="/layout/addusers">添加用户</el-menu-item>
              <el-menu-item index="/login">重新登录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>分类管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分类管理</template>
              <el-menu-item index="/layout/index">分类列表</el-menu-item>
              <el-menu-item index="/layout/users">添加分类</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "layout"
    }
</script>

<style scoped lang="scss">
.wrapper{
  .header h2{
    text-align: center;
    margin-left: 200px;
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid #ccc;
  }
  .sidebar{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    background-color:#545c64;
    overflow: hidden;
  }
  .content{
    margin-left: 200px;
    padding: 15px;
  }
}
</style>
