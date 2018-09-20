<template>
    <div class="wrapper">
      <el-table :data="swiperdata">
        <el-table-column
          prop=""
          label="轮播图头"
          width="300">
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
            <el-button  @click="checkswiper(scope.row.book)" type="primary" size="small" round class="btn">查看详情</el-button>
            <el-button  @click="alertswiper(scope.row._id)" type="warning" size="small" round class="btn">修改轮播图</el-button>
            <el-button  @click="deletethis(scope.row._id)" type="danger" size="small" round class="btn">删除轮播图</el-button>
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
      data() {
        return {
          swiperdata: [],
          count: 0,
          page: 1,
          ids:[],
        }
      },
      name: "getallswiper",
      methods: {
        getallswiper() {
          this.$axios.get('swiper', {pn: this.page}).then(res => {
            if (res.code == 200) {
              this.swiperdata = res.data
              this.count = res.count
            }
          })
        },
        changepage(page) {
          this.page = page;
          this.getallswiper();
        },
        checkswiper(res) {
          this.$store.commit('CHANGE_BOOKDATA', res);
          this.$router.push('swiperdetail');
        },
        deletethis(thisid){
          this.ids = thisid;
          this.$confirm('此操作将永久删除该轮播图, 是否继续?', '警告!', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios.post('/swiper/delete',{ids:this.ids}).then((res)=>{
              if(res.code == 200){
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                this.getallswiper();
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        alertswiper(thisdata){
          // this.$store.commit('CHANGE_OTHERBOOKDATA',thisdata);
          this.$router.push({path:'alertswiper',query:{id:thisdata}});
        }
      },
      created() {
        this.getallswiper();
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
