<template>
  <div class="photo">
    <div class="block">
      <el-image :src="imgUrl"></el-image>
    </div>
    <div class="block">
      <el-image :src="predictImg"></el-image>
    </div>
  </div>
</template>

<script>
export default {
  name: "wild-entry-after",
  data() {
    return {
      imgUrl: null,
      predictImg: require("@/assets/img/aaa889d7d58744238d45e818c90f088b.png"),
    }
  },
  created() {

    let response = this.$route.params.url;
    this.imgUrl = response;
  }
}
</script>

<style lang="less" scoped>
.photo {
  display: flex;
  .block {
    width: 50%;
  }
}
</style>