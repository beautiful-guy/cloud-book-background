<template>
    <div class="wrapper">
      <el-table :data="swiperdata">
        <el-table-column
          prop=""
          label="轮播图头"
          width="400">
          <template slot-scope="scope">
            <img class="imgs" :src="scope.row.img" alt="">
          </template>
        </el-table-column>
        <el-table-column
        prop="title"
        label="书名"
        width="250">
        </el-table-column>
        <el-table-column
          prop=""
          label="操作"
          width="350">
          <template slot-scope="scope">
            <el-button  @click="checkswiper" type="primary" round class="btn">查看详情</el-button>
            <el-button  type="danger" round class="btn">删除轮播图</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
      background
      layout="prev,pager,next"
      @current-change="changepage"
      :total="count">
      </el-pagination>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          swiperdata:[],
          count:0,
          page:1,
        }
      },
        name: "getallswiper",
      methods:{
          getallswiper(){
            this.$axios.get('swiper',{pn:this.page}).then(res=>{
              if(res.code == 200){
                this.swiperdata = res.data
                this.count = res.count
              }
            })
          },
        changepage(page){
            this.page = page;
            this.getallswiper();
        },
        checkswiper(){

        }
      },
      created(){
          this.getallswiper()
      }
    }
</script>

<style scoped lang="scss">
  .wrapper{
    .imgs{
      width: 100px;
      height: 100px;
    }
  }
</style>
