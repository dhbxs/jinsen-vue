<template>
  <div class="wild-entry-main">
    <el-upload
        drag
        :headers="user.token"
        list-type="picture-card"
        name="file"
        accept=".jpg,.png,.webp,.jfif"
        :limit="1"
        :on-success="uploadFile"
        action="http://localhost:8181/file/upload"
        multiple: false>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <!--      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
    </el-upload>
  </div>
</template>

<script>
let date = new Date();
date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getTime();
export default {
  name: "wild-entry",
  data() {
    return {
      user: localStorage.getItem("user"),
      date: this.date,
    }
  },
  methods: {
    uploadFile(res, file) {

      console.log(res.data);
      if(res.state === 200) {
        this.$router.push({
          name: "wild-entry-after",
          params: {
            url: res.data,
          },
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
.wild-entry-main {
  margin: 10px auto;
  padding: 0;
  display: flex;
  justify-content: center;
}

/deep/ .el-upload {
  width: 700px;
  text-align: center;
}

/deep/ .el-upload--text {
  width: 700px;
  height: 500px;
}

/deep/ .el-upload-dragger {
  width: 700px;
  height: 500px;
}
</style>