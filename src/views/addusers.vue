<template>
    <div class="wrapper">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>添加用户</el-breadcrumb-item>
      </el-breadcrumb>
      <h2>请根据下方提示输入你的信息</h2>
      <div class="profile">
        <h4>点击右方上传你的头像</h4>
        <upimg @receiveMsg="showMsg"></upimg>
      </div>
      <div>
      <el-form :inline="true"  class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input  placeholder="请输入用户名" v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input  placeholder="请输入密码" type="password" v-model="formData.password"></el-input>
        </el-form-item>
        </el-form>
       </div>
      <div>
        <el-form :inline="true"  class="demo-form-inline">
          <el-form-item label="昵称">
            <el-input  placeholder="请输入昵称" v-model="formData.nickname"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input  placeholder="请输入邮箱" v-model="formData.email"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="个人简介">
            <el-input type="textarea" placeholder="请输入个人简介" v-model="formData.desc"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-row>
        <el-button @click="submitdata" type="primary">点击提交</el-button>
      </el-row>
    </div>
</template>

<script>
  import upimg from '@/components/upimg';
    export default {
      components:{
        upimg
      },
      data() {
        return {
          formData:{
            username:'',
            password:'',
            avatar:'',
            desc:'',
            nickname:'',
            email:''
          },
          token:''
        };
      },
      methods: {

        submitdata(){
          this.$axios.post('/user',this.formData).then(res=>{
            if(res.code == 200){
              this.$message.success('上传成功');
            }else{
              this.$message.error(res.msg)
            }
          })
        },
        showMsg(res){
          this.formData.avatar = res;
        }
      }
    }
</script>

<style scoped lang="scss">
  .wrapper{
    height: 100vh;
    h2{
      height: 60px;
      text-align: center;
    }
    .profile{
      display: flex;
      line-height: 80px;
      h3{
        height: 80px;
      }
    }
  }
  .avatar-uploader .el-icon-plus {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-icon-plus:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
</style>
