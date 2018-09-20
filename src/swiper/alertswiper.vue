<template>
    <div class="wrapper">
      <h1>请按照以下操作提示修改你的轮播图</h1>
      <el-form :model="formdata" style="width: 200px">
        <el-form-item label="图片">
          <upload-img class="fill"></upload-img>
          <img class="imgs" :src="formdata.img" alt="">
        </el-form-item>
        <el-form-item  label="标题">
          <el-input  v-model="formdata.title"></el-input>
        </el-form-item>
        <el-form-item label="序号">
          <el-input-number v-model="formdata.index" :min="1"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button  @click="editswiper" type="primary">点击修改</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          formdata:{
            title:'',
            img:'',
            book:'',
            index:'',
          },
          swiperid:''
        }
      },
        name: "alertswiper",
      methods:{
        getiddata(){
          this.swiperid  = this.$route.query.id;
          this.$axios.get(`swiper/${this.swiperid}`,{id:this.swiperid}).then(res=>{
            if(res.code == 200){
              console.log(res)
              this.formdata = res.data;
              this.formdata.book = res.data.book._id;
            }
          })
        },
        editswiper(){
          this.$axios.put(`swiper/${this.swiperid}`,this.formdata).then(res=>{
            if(res.code == 200){
              this.$message.success(res.msg)
            }else {
              this.$message.error(res.msg)
            }
          }).catch(err=>{
            console.log(err)
          })
        }
      },
      created(){
        this.getiddata();
      }
    }
</script>

<style scoped lang="scss">
  .wrapper{
    h1{
      text-align: center;
      padding-bottom: 20px;
    }
    .fill{
      float: left;
    }
    .imgs{
      width: 100px;
      height: 100px;
      position: absolute;
      z-index: -1;
      left: 41px;
    }
  }
</style>
