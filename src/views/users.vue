<template>
    <div class="user-manage">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-table :data="tableData">
        <el-table-column
          prop="username"
          label="昵称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="createdTime"
          label="创建日期"
          width="200">
        </el-table-column>
        <el-table-column
          prop="desc"
          label="个性签名"
          width="300">
        </el-table-column>
        <el-table-column
          prop=""
          label="用户头像"
          width="150">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" class="avatar">
          </template>
        </el-table-column>
        <el-table-column
          prop=""
          label="操作"
          width="250">
          <template slot-scope="scope">
            <el-button @click="queryUser(scope.row)" type="primary" round class="btn">查看用户</el-button>
            <el-button @click="deleteUser(scope.row._id)" type="danger" round class="btn">删除用户</el-button>
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
          tableData:[
          ],
          page:1,
          num1:10,
          count:0
        }
      },
      methods:{
        getData(){
          this.$axios.get('user',{pn:this.page,size:this.num1}).then(res=>{
            if(res.code == 200){
              this.tableData = res.data
              this.count = res.count
            }
          })
        },
        pageChange(page){
          // console.log(page)
          this.page = page
          this.getData();
        },
        queryUser(res){
          this.$store.commit('CHANGE_USERDATA',res)
          this.$router.push('/layout/userDetail')
        },
        deleteUser(id){
          this.$confirm('此操作将永久删除该管理员, 是否继续?', '警告!', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios.post('/user/delete',{userIds:[id]}).then((res)=>{
              if(res.code == 200){
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                this.getData();
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      },
      created(){
        this.getData();
      },
        name: "users"
    }
</script>

<style scoped lang="scss">
  .avatar{
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .btn{
    width: 100px;
    height: 40px;
  }
  /*/deep/{*/
    /*.el-pagination{*/
      /*position: fixed;*/
      /*left: 200px;*/
      /*bottom: 0;*/
    /*}*/
  /*}*/
</style>
