<template>
  <div class="body">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#0099ff" fill-opacity="1"
            d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,240C672,256,768,224,864,218.7C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <div class="user">
      <i class="fa fa-user"></i>

    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
@import url("../../assets/css/font-awesome.min.css");

.body {
  background-color: #f0f5f5;
}

.body::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #3399ff;
  clip-path: circle(20% at 100% 0);
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20rem;
  height: 20rem;
  perspective: 1500px;
  -webkit-perspective: 1500px;
  -moz-perspective: 1500px;
}

svg {
  position: absolute;
  bottom: 0;
  z-index: -1;
}

.user {
  position: absolute;
  top: 16rem;
  left: 5rem;
}

.user .fa-user {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: #0066ff;
}

</style>