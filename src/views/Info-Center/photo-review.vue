<template>
  <div>
    <div  v-for="item in file" :key="item.fId" style="display: inline-block; width: 400px; margin: 5px; text-align: center">
      <el-image
          style="width: 400px;"
          :src="item.filePath">
      </el-image>
      <span>{{item.fileName}}</span>
    </div>
  </div>
</template>

<script>
import {getAllFile} from "@/http/api/file";

export default {
  name: "photo-review",
  data() {
    return {
      file: [],
    }
  },
  methods: {
    getAllImage() {
      getAllFile().then(res => {
        if (res.state === 200) {
          this.file = res.data;
        }
      })
    }
  },
  created() {
    this.getAllImage();
  }
}
</script>

<style scoped>

</style>