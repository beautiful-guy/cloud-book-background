<template>
    <div class="wrapper">
      <div class="outer">
      <el-form ref="allPassword" :model="allPassword" :rules="rules">
        <el-form-item label="原密码：" prop="password">
          <el-input placeholder="请输入原密码" v-model="allPassword.password"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" prop="new_password">
          <el-input placeholder="请输入新密码" v-model="allPassword.new_password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkPassword">
          <el-input placeholder="请确认新密码" v-model="allPassword.checkPassword"></el-input>
        </el-form-item>
        <div class="twobtn">
        <el-button type="primary" @click="submitPass">提交</el-button>
        <el-button type="primary" @click="resetForm('allPassword')">重置</el-button>
        </div>
      </el-form>
    </div>
    </div>
</template>

<script>
    export default {
      data(){
        let validatePass = (rule, value, callback)=>{
          if(value.length>=5){
            callback();
          }else {
            callback(new Error('密码不得小于五位'));
          }
        }
        let validatePass1 = (rule, value, callback)=>{
          if(value.length>=5){
            callback();
          }else {
            callback(new Error('密码不得小于五位'));
          }
        }
        let validatePass2 = (rule, value, callback)=>{
          if(value.length>=5){
            callback();
          }else {
            callback(new Error('密码不得小于五位'));
          }
        }
        return{
          allPassword:{
            password:'',
            new_password:'',
            checkPassword:''
          },
           storePass:'',
          rules: {
            password: [
              { validator: validatePass, trigger: 'blur' }
            ],
            new_password: [
              { validator: validatePass1, trigger: 'blur' }
            ],
            checkPassword: [
              { validator: validatePass2, trigger: 'blur' }
            ]
          }
        }
      },
      methods:{
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        submitPass(){
          if(this.allPassword.checkPassword == this.allPassword.new_password){
            this.$axios.put('user/password',this.allPassword).then(res=>{
              if(res.code == 200){
                this.$message.success(res.msg)
                this.$router.push('/layout/index')
              }else if(res.code == 400){
                this.$message.error(res.msg)
              }
            })
          }else {
            this.$message.error('两次密码不一致，请重新输入')
          }
        }
      },
    }
</script>

<style scoped lang="scss">
  .wrapper{
    .outer{
      width: 600px;
      margin: 0 auto;
      .twobtn{
        display: flex;
        justify-content: space-around;
      }
    }
  }
</style>
