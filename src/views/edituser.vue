<template>
    <div class="wrapper">
      <h2>修改个人信息</h2>
      <el-form :model="formData">
        <el-form-item label="昵称">
            <el-input v-model="formData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="formData.email"></el-input>
        </el-form-item>
        <p class="photo">头像</p>
        <el-form-item >
          <upimg @receiveMsg="showMsg"></upimg>
          <img class="imgs" :src="formData.avatar" alt="">
        </el-form-item>
        <el-form-item label="个性签名">
          <el-input type="textarea" v-model="formData.desc"></el-input>
        </el-form-item>
        <el-button size="small" type="primary" @click="handleClick">
          保存更改
        </el-button>
      </el-form>
    </div>
</template>

<script>
  import upimg from '@/components/upimg';
    export default {
      data(){
        return{
          formData:{
            nickname:'',
            email:'',
            desc:'',
            avatar:''
          },
          token:''
        }
      },
        name: "edituser",
      components:{
        upimg
      },
      methods:{
        initData(){
          this.formData = {
            ...this.$store.state.userinfo
          }
          console.log(this.$store.userinfo)
        },
        handleClick(){
          this.$axios.put('/user/userInfo',this.formData).then(res=>{
            if(res.code == 200){
              this.$store.commit('CHANGE_USERINFO',res.data);
              this.initData();
              this.$message.success(res.msg)
            }
          })
        },
        showMsg(res){
          this.formData.avatar = res
        }
      },
      created(){
        this.initData();
      }
    }
</script>

<style scoped>
.imgs{
  width: 100px;
  height: 100px;
  position: absolute;
  top: 1px;
  left: 1px;
  z-index: -1;
}
  .photo{
    font-size: 15px;
    color: #555;
  }
</style>
