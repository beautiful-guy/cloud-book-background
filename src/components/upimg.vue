<template>
    <div>
      <!--<h2>传统的文件上传</h2>-->
      <!--<form action="https://upload-z1.qiniup.com" method="post" enctype="multipart/form-data">-->
        <!--<input type="file" name="file">-->
        <!--<input type="text" name="token" v-model="token">-->
        <!--<button>提交</button>-->
      <!--</form>-->
      <input type="file" name="file" @change="handleChange">
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "upimg",
      data(){
        return{
          token:'',
          imgUrl:''
        }
      },
      methods:{
        getToken(){
          axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
            this.token = res.data.data
          })
        },
        handleChange(event){
          let file = event.target.files[0];
          let formdata = new FormData();
          formdata.append('file',file,file.name);
          formdata.append('token',this.token);
          axios.post('https://upload-z1.qiniup.com',formdata,{
            headers:{
              //表单上传时，使用multipart/form-data
              'Content-Type':'multipart/form-data',
              //get请求时，默认是下边的
              // 'Content-Type':'application/x-www-form-urlencoded'
            }
          }).then(res=>{
            this.imgUrl = res.data.url;
            this.handleMsg();
          })
        },
        handleMsg(){
          this.$emit('receiveMsg',this.imgUrl)
        }
      },
      created(){
          this.getToken();
      }
    }
</script>

<style scoped>

</style>
