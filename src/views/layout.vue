<template>
    <div class="wrapper">
      <div class="header">
        <h2>欢迎来到云书后台操作系统</h2>
      </div>
      <div class="portrait">
        <img class="imgs" :src="avatar" alt="">
        <p class="nick">{{nickname}}</p>
        <p class="describe">{{desc}}</p>
        <el-button type="info" round size="small" @click="toggleToUser">修改个人信息</el-button>
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
              <el-menu-item index="index">首页</el-menu-item>
              <el-menu-item index="users">用户管理</el-menu-item>
              <el-menu-item index="addusers">添加用户</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>分类管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分类管理</template>
              <el-menu-item index="getallbooks">分类列表</el-menu-item>
              <el-menu-item index="addcategory">添加分类</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>轮播图管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">轮播图管理</template>
              <el-menu-item index="getallswiper">轮播图列表</el-menu-item>
              <el-menu-item index="addcategory">添加轮播图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="setPassword">修改密码</el-menu-item>
              <el-menu-item index="/login">重新登录</el-menu-item>
              <el-menu-item index="1">退出登录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "layout",
      data(){
          return{
            avatar:'',
            desc:'',
            nickname:''
          }
      },
      methods:{
          getData(){
            this.avatar = this.$store.state.userinfo.avatar;
            this.desc = this.$store.state.userinfo.desc;
            this.nickname = this.$store.state.userinfo.nickname
          },
        toggleToUser(){
            this.$router.push('/layout/edituser')
        }
      },
      created(){
          this.getData()
      }
    }
</script>

<style scoped lang="scss">
.wrapper{
  .header{
    h2{
      text-align: center;
      margin-left: 200px;
      height: 60px;
      line-height: 60px;
      border-bottom: 2px solid #ccc;
      background: aqua;
      position:relative;
    }
  }
  .portrait{
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 150px;
    background-color:#545c64;
    text-align: center;
    .imgs{
      position: absolute;
      left: 10px;
      top: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .nick{
      position: absolute;
      top: 40px;
      left: 90px;
      font-size: 20px;
      color: #fff;
    }
    .describe{
      position: absolute;
      top: 90px;
      left: 10px;
      color: #fff;
    }
    /deep/{
      .el-button {
        position: absolute;
        left: 40px;
        bottom: 0;
      }
    }

  }
  .sidebar{
    position: fixed;
    top: 150px;
    left: 0;
    bottom: 0;
    width: 200px;
    background-color:#545c64;
    overflow: hidden;
    /deep/ {
      .el-menu {
        border-right: none;
      }
    }
  }

  .content{
    margin-left: 200px;
    padding: 15px;
  }
}

</style>
