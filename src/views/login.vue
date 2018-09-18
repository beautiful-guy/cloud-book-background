<template>
<div class="container">
  <h1 class="title">欢迎来到后台管理系统</h1>
  <div class="main-view">
    <h2 class="main-view-title">请登录</h2>
    <div class="main-view-wrapper">
    <el-form refs="form" :model="formData" :rules="rules">
      <el-form-item label="用户名:" prop="username">
        <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="formData.password" type="password" placeholder="请输入密码" @keyup.enter.native="handlelogin"></el-input>
      </el-form-item>
    </el-form>
      <el-row class="btn">
        <el-button @click="handlelogin" type="primary" :loading="isloading">登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-row>
    </div>
  </div>
</div>
</template>

<script>
    export default {
      name: "login",
      data() {
        var validateUser = (rule, value, callback)=>{
          if(!value){
            callback(new Error('请输入合法的用户名'))
          }else {
            callback()
          }
        };
        var validatePass = (rule, value, callback)=>{
          if(value&&value.length>=5){
            callback();
          }else {
            callback(new Error('请输入合法的密码'));
          }
        }
        return {
          formData: {
            username: '',
            password: ''
          },
          isloading:false,
          rules: {
            username: [
              { validator: validateUser, trigger: 'blur' }
            ],
            password: [
              { validator: validatePass, trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        handlelogin() {
          this.isloading = true;
          this.$axios.post('/login',this.formData).then(res=>{
            if(res.code == 200){
              this.$store.commit('CHANGE_USERINFO',res.data)
              this.$message.success('登录成功');
              setTimeout(()=>{
                this.$router.push('/layout')
              },1000)
            }else{
              this.$message.error(res.msg)
            }
            this.isloading = false;
          }).catch(err=>{
            this.isloading = false;
          })
        },
        resetForm() {
          this.formData.username = '';
          this.formData.password = '';
        },
      }
    }
</script>

<style scoped lang="scss">
.container{
  height: 100vh;
  background-color: #545c64;
  overflow: hidden;
  .title{
    color: #ccc;
    text-align: center;
    margin-top: 70px;
  }
  .main-view{
    width: 400px;
    height: 350px;
    border-radius: 10px;
    margin: 20px auto 0;
    background-color: #fff;
    overflow: hidden;
    .main-view-title{
      text-align: center;
      margin-top: 30px;
    }
    .main-view-wrapper{
      width: 300px;
      height: 300px;
      margin: 0 auto;
      .btn{
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
