<template>
    <div class="wrapper">
      <div class="outer">
      <el-form>
        <el-form-item label="原密码：">
          <el-input placeholder="请输入原密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码：">
          <el-input placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：">
          <el-input placeholder="请确认新密码"></el-input>
        </el-form-item>
        <div class="twobtn">
        <el-button type="primary">提交</el-button>
        <el-button type="primary">重置</el-button>
        </div>
      </el-form>
    </div>
    </div>
</template>

<script>
    export default {
        name: "set-password"
    }
</script>

<style scoped lang="scss">
  .wrapper{
    .outer{
      width: 600px;
      margin: 0 auto;
      .twobtn{
        display: flex;
        justify-content: space-around;
      }
    }
  }
</style>
