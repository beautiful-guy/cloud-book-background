<template>
    <div class="wrapper">
      <el-table
        :data="Details"
        style="width: 100%">
        <el-table-column
          prop=""
          label="书籍头图"
          width="180">
          <template slot-scope="scope">
            <img :src="scope.row.img" class="icon">
          </template>
        </el-table-column>
        <el-table-column
        prop="author"
        label="作者"
        width="100">
        </el-table-column>
        <el-table-column
          prop="looknums"
          label="观看人数"
          width="100">
        </el-table-column>
        <el-table-column
          prop="desc"
          label="书籍描述"
          width="650">
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="pageChange"
        :total="20">
      </el-pagination>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          classifyid:'',
          Details:[],
          page:1,
          size:5
        }
      },
      name: "bookdetail",
      methods:{
        getid(){
          this.classifyid = this.$store.state.categoryid
        },
        getbookdata(){
          this.$axios.get(`category/${this.classifyid}/books`,{pn:this.page,size:this.size}).then(res=>{
            if(res.code == 200){
              this.Details = res.data.books
            }
          }).catch(err=>{
            console.log(err)
          })
        },
        pageChange(page){
          this.page = page;
          this.getbookdata()
        }
      },
      created(){
        this.getid();
        this.getbookdata();
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
