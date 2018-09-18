<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/layout/users'}">用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="wrapper">
      <img :src="personData.avatar" alt="">
      <el-form label-width="80px" :model="personData">
        <el-form-item label="昵称">
          <el-input v-model="personData.nickname" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="personData.email" disabled></el-input>
        </el-form-item>
        <el-form-item label="个性签名">
          <el-input v-model="personData.desc" disabled></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
    export default {
      data(){
        return{
          personData:{}
        }
      },
        name: "user-detail",
      methods:{
        getPersonalData(){
          this.personData=this.$store.state.userdata
        }
      },
      created(){
        this.getPersonalData()
      }
    }
</script>

<style scoped lang="scss">
.wrapper{
  margin: 0 auto;
  width: 600px;
  text-align: center;
  img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    padding-bottom: 50px;
  }
}
</style>
