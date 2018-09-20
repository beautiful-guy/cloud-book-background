<template>
    <div class="wrapper">
      <el-table :data="swiperdata">
        <el-table-column
          prop=""
          label="书籍头图"
          width="200">
          <template slot-scope="scope">
            <img class="imgs" :src="scope.row.img" alt="">
          </template>
        </el-table-column>
        <el-table-column
        prop="author"
        label="作者"
        width="100">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="100">
        </el-table-column>
        <el-table-column
        prop="desc"
        label="简介"
        width="550">
      </el-table-column>
        <el-table-column
          prop="looknums"
          label="观看人数"
          width="100">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          swiperdata:[]
        }
      },
        name: "swiperdetail",
      methods:{
        getswiperdata(){
          this.swiperdata[0] = this.$store.state.bookdata
        }
      },
      created(){
        this.getswiperdata()
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
