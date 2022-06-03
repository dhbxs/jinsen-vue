<template>
  <div>
    <el-form ref="form" :model="user" :rules="rules" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="user.gender" placeholder="请选择性别">
          <el-option label="男" value=1></el-option>
          <el-option label="女" value=0></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="user.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="user.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword">
        <el-input type="password" v-model="checkPassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即修改</el-button>
        <el-button @click="toUserSetting">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { userUpdate } from "@/http/api/user";

export default {
  name: "modify-user",
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (this.checkPassword === '' && this.user.password !== '') {
        callback(new Error('请再次输入密码'));
      } else if (this.checkPassword !== this.user.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      user: [],
      checkPassword: "",
      rules: {
        checkPassword: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      if(this.user.password === "") {
        delete this.user.password;
      }
      userUpdate(this.user).then(res => {
        if (res.state === 200) {
          this.$router.push({
            name: "user-setting",
          });
          this.$message.success("修改成功");
        } else {
          this.$message.error("修改失败");
        }
      })
    },
    toUserSetting() {
      this.$router.push("user-setting");
    }
  },
  created() {
    let res = this.$route.params.tableData;
    res.password = '';
    this.user = res;
  }
}
</script>

<style scoped>

</style>