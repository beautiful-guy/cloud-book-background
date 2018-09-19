<template>
    <div class="wrapper">
      <el-table :data="formData">
        <el-table-column
          prop="title"
          label="分类名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop=""
          label="分类图片"
          width="250">
          <template slot-scope="scope">
            <img :src="scope.row.icon" class="icon">
          </template>
        </el-table-column>
        <el-table-column
          prop=""
          label="操作"
          width="350">
          <template slot-scope="scope">
            <el-button @click="checkDetail(scope.row)" type="primary" round class="btn">查看详情</el-button>
            <el-button @click="deletethis(scope.row._id)" type="danger" round class="btn">删除分类</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="pageChange"
        :total="count">
      </el-pagination>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          formData:[],
          count:0,
          page:1,
          num:10,
        }
      },
        name: "getallbooks",
      methods:{
          getallbookdata(){
            this.$axios.get('/category',{pn:this.page,size:this.num}).then(res=>{
              this.formData = res.data
              this.count = res.count
            })
          },
          checkDetail(res){
            this.$store.commit('CHANG_CATEGORYID',res._id);
            this.$router.push('bookdetail')
          },
          deletethis(id){
            this.$confirm('此操作将永久删除该文件,请慎重选择！', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              let cateid = id
              this.$axios.delete(`/category/${cateid}`).then(res=>{
                console.log(res)
                if(res.code == 200){
                  this.$message.success(res.msg);
                  this.getallbookdata();
                }
              })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          },
          pageChange(page){
            this.page = page;
            this.getallbookdata();
          }
      },

      created(){
        this.getallbookdata()
      }
    }
</script>

<style scoped lang="scss">
  .wrapper{
    .icon{
      width: 100px;
      height: 100px;
    }
  }
</style>
