<template>
  <div>
    <el-form ref="form" :model="tableData" label-width="130px" style="width: 700px">
      <el-form-item label="工单号">
        <el-input v-model="tableData.number"></el-input>
      </el-form-item>
      <el-form-item label="树材种类">
        <el-select v-model="tableData.woodType" placeholder="请选择木材种类" style="width: 100%">
          <el-option label="杉木" value="杉木"></el-option>
          <el-option label="松木" value="松木"></el-option>
          <el-option label="杨木" value="杨木"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="检尺径（厘米）">
        <el-input v-model="tableData.diameter"></el-input>
      </el-form-item>
      <el-form-item label="检尺长（米）">
        <el-input v-model="tableData.length"></el-input>
      </el-form-item>
      <el-form-item label="根数">
        <el-input v-model="tableData.amount"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="toWildreview" icon="el-icon-arrow-left" size="mini">返回</el-button>
        <el-button type="primary" @click="onSubmit" icon="el-icon-circle-check" size="mini">立即修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { updateWildOrder } from "@/http/api/wild-order";

export default {
  name: "wild-modify",
  data() {
    return {
      tableData: [],
    }
  },
  methods: {
    onSubmit() {
      updateWildOrder(this.tableData).then(res => {
        if(res.state === 200) {
          this.$message.success("修改成功");
        }
      })
    },
    toWildreview() {
      this.$router.push("wild-review");
    }
  },
  created() {
    let res = this.$route.params.tableData;
    this.tableData = res;
  }

}
</script>

<style scoped>

</style>