<template>
  <el-row class="home" :gutter="20">
    <el-row :span="8" style="margin-top: 20px;">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg"/>
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">

        </div>
      </el-card>
    </el-row>
  </el-row>
</template>

<script>
// 从data.js中解构出getMenu方法
import {getMenu} from '@/api/data.js';
export default {
  name: "home",
  data(){
    return {
      userImg: require('@/assets/img/avatar.png')
    }
  },
  mounted() {
    // getMenu().then(res => {
    //   console.log(res);
    // })
  }
}
</script>

<style scoped>

</style>