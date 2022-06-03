<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px;">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg"/>
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px;">
      <el-card shadow="hover">
        <el-calendar v-model="value">
        </el-calendar>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "home",
  data(){
    return {
      userImg: require('@/assets/img/avatar.png'),
      value: new Date(),
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
/deep/ .el-calendar-table .el-calendar-day{
  width: 60px;
  height: 44px;
}
</style>