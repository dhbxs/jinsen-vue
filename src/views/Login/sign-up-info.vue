<template>
  <div class="box signup">
    <div class="form-content">
      <div class="avtar">
        <div class="pic"><img src="@/assets/img/2.jpg" alt=""/></div>
      </div>
      <h1>Let's get started</h1>
      <form class="form">
        <div>
          <i class="fa fa-user-o"></i>
          <input type="text" placeholder="username" v-model="user.username"/>
        </div>
        <div>
          <i class="fa fa-envelope-o"></i>
          <input type="email" placeholder="email" v-model="user.email"/>
        </div>
        <div>
          <i class="fa fa-key"></i>
          <input type="password" placeholder="password" v-model="user.password"/>
        </div>
        <div class="btn">
          <button @click="register">signup</button>
        </div>
      </form>
      <p class="tips">
        Already hace an account ? <span class="loginbtn" @click="toLogin">login</span>
      </p>
    </div>
  </div>
</template>

<script>
import {userRigister} from "@/http/api/user";

export default {
  name: "sign-up-info",
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    toLogin() {
      this.$router.push({
        name: 'login-info'
      })
    },
    register() {
      const self = this;
      userRigister(this.user).then(res => {
        console.log(res);
        if (res.state === 200) {
          self.$message.success("注册成功");
          self.$router.push("/");
        } else if(res.state !== 200) {
          this.$message.error("注册失败 " + res.message);
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 20rem;
  height: 28rem;
  border-radius: 10px;
  /* cursor: pointer; */
  backface-visibility: hidden;
  transition: all 0.5s;
  user-select: none;
}

.container .form-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 0 1px #3399ff;
  border-radius: 30px;
  background-color: #fff;
}

.container .form-content .avtar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.container .form-content .avtar .pic {
  position: relative;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #3399ff;
}

.container .form-content .avtar .pic img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.container .form-content h1 {
  font-size: 1.6rem;
}

.container .form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container .form input {
  width: 16rem;
  padding: 0.8rem;
  padding-left: 3rem;
  outline: none;
  border: none;
  border-radius: 15px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  margin: 5px;
}

.container .form div {
  position: relative;
}

.container .form div .fa {
  position: absolute;
  top: 18px;
  left: 25px;
}

.container .form .btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}

.container .form .btn button {
  text-transform: uppercase;
  padding: 8px;
  border: none;
  outline: none;
  background-color: #0066ff;
  color: #fff;
  width: 12rem;
  border-radius: 30px;
  cursor: pointer;
}

.container .tips {
  color: #888;
  font-size: 14px;
}

.container .tips span {
  color: #0066ff;
  cursor: pointer;
  font-weight: 500;
}
</style>
