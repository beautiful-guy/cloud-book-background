<template>
  <div class="wrapper">
    <h1>请输入以下信息添加分类</h1>
    <div class="outer">
      <el-form>
        <el-form-item label="请输入你的标题">
          <el-input v-model="requiredparameter.title" placeholder="请输入你的标题"></el-input>
        </el-form-item>
      </el-form>
      <p>请上传一张图片</p>
      <upimg class="img" @receiveMsg="showMsg"></upimg>
      <el-button @click="getcatedata" type="primary" class="btn">点击添加</el-button>
    </div>
  </div>
</template>

<script>
  import upimg from '@/components/upimg';
    export default {
      data(){
        return{
          requiredparameter:{
            title:'',
            icon:''
          }
        }
      },
        name: "addcategory",
      components:{
        upimg
      },
      methods:{
        showMsg(site){
          this.requiredparameter.icon = site
        },
        getcatedata(){
          this.$axios.post('category',this.requiredparameter).then(res=>{
            if(res.code == 200){
              this.$message.success(res.msg)
            }else {
              this.$message.error('添加失败！请重新添加')
            }
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  .wrapper{
    h1{
      text-align: center;
    }
    .outer{
      width: 800px;
      margin: 20px auto 0;
      .img{
        margin-top: 20px;
      }
      p{
        font-size: 15px;
        color: #555;
      }
      .btn{
        margin-top: 20px;
      }
    }
  }
</style>
