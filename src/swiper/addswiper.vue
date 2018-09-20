<template>
    <div class="wrapper">
      <el-form :model="swiperdata">
        <el-form-item label="轮播图标题">
          <el-input  v-model="swiperdata.title"></el-input>
        </el-form-item>
        <el-form-item label="轮播图书籍">
          <el-select  v-model="swiperdata.categoryid" @change="catagorychange">
            <el-option  v-for="(item,index) in categorydata"
                       :key="index"
                       :label="item.title"
                       :value="item._id">
            </el-option>
          </el-select>

          <div class="book-item" v-if="getitembook[0]">
            <div class="img-wrap">
              <img :src="getitembook[0].img" alt="">
            </div>
            <div class="book-desc">
              <div class="title">{{getitembook[0].title}}</div>
              <div class="author">{{getitembook[0].author}}</div>
            </div>
          </div>
        </el-form-item>

        <el-form-item label="轮播图头图">
          <upload-img @receiveMsg="getMsg" class="fill"></upload-img>
        </el-form-item>
        <el-form-item label="计数器">
          <el-input-number v-model="swiperdata.index" :min="1"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="clickonadd" >点击添加</el-button>
        </el-form-item>
      </el-form>

      <el-dialog title="轮播图" :visible.sync="isshowdialog">
        <el-table :data="bookdata">
          <el-table-column property="title" label="书名" width="250"></el-table-column>
          <el-table-column property="" label="书籍头图" width="150">
            <template slot-scope="scope">
              <img class="imgs" :src="scope.row.img" alt="">
            </template>
          </el-table-column>
          <el-table-column property="author" label="作者" width="100"></el-table-column>
          <el-table-column property="" label="操作" width="100">
            <template slot-scope="scope">
              <el-button type="primary" size="small" @click="handleaddbook(scope.row._id)">添加</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>

    </div>
</template>

<script>
    export default {
      data(){
        return{
          swiperdata:{
            title:'',
            img:'',
            book:'',
            index:'',
            categoryid:''
          },
          categorydata:[],
          bookdata:[],
          count:0,
          isshowdialog:false
        }
      },
        name: "addswiper",
      methods:{
        getcategorydata(){
          this.$axios.get('/category').then(res=>{
            if(res.code == 200){
              this.categorydata = res.data
            }
          })
        },
        async getbookdata(){
          const res = await this.$axios.get(`/category/${this.swiperdata.categoryid}/books`);
          this.bookdata = res.data.books;
          this.count = res.count;
        },
        catagorychange(){
          this.getbookdata();
          this.isshowdialog = true;
        },
        handleaddbook(id){
          this.swiperdata.book = id;
          this.isshowdialog = false
        },
        getMsg(imgid){
          this.swiperdata.img = imgid
        },
        clickonadd(){
          this.$axios.post('swiper',this.swiperdata).then(res=>{
            if(res.code==200){
              this.$message.success(res.msg)
              this.$router.push('getallswiper')
            }else {
              this.$message.error(res.msg)
            }
          }).catch(err=>{
            console.log(err)
          })
        }
      },
      created(){
        this.getcategorydata();
      },
      computed:{
        getitembook(){
          if(this.swiperdata.book){
            return this.bookdata.filter(item=>item._id == this.swiperdata.book)
          }else{
            return []
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  .wrapper{
    width: 500px;
    .imgs{
      width: 100px;
      height: 100px;
    }
    .book-item{
      margin-top: 20px;
      border: 1px solid #ccc;
      display: flex;
      width: 300px;
      font-size: 14px;
      color: #666;
      .img-wrap{
        img{
          width: 100px;
          height: 120px;
          padding: 10px 10px;
        }
      }
      .book-desc{
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
    .fill{
      float: left;
    }
  }
</style>
