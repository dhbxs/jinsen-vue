<template>
  <div id="print">
    <el-table
        :data="tableDate"
        style="width: 100%"
        border
        default-expand-all>
      <el-table-column
          prop="number"
          label="工单号"
          align="center">
      </el-table-column>
      <el-table-column label="野账信息" align="center">
        <el-table-column
            prop="woodType"
            label="树材种类"
            align="center">
        </el-table-column>
        <el-table-column
            prop="diameter"
            label="检尺径（厘米）"
            align="center">
        </el-table-column>
        <el-table-column
            prop="length"
            label="检尺长（米）"
            align="center">
        </el-table-column>
        <el-table-column
            prop="amount"
            label="根数"
            align="center">
        </el-table-column>
        <el-table-column
            prop="acreage"
            label="材积（立方米）"
            align="center">
          <template slot-scope="scope">
            {{ scope.row.acreage.toFixed(5) }}
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <el-button v-print="printObj"  type="primary" plain style="margin: 10px auto; float: right" >打印</el-button>
  </div>
</template>

<script>
import {getAllWildOrderInfo} from "@/http/api/wild-order";

export default {
  name: "wild-print",
  data() {
    return {
      tableDate: [],
      printObj: {
        id: 'print',
        popTitle: '野账数据',
        openCallback: (e) => {
          this.printVisible = false
        },
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
      },
    }
  },

  methods: {
    getAllWildOrder() {
      getAllWildOrderInfo().then(res => {
        if (res.state === 200) {
          this.tableDate = res.data;
        }
      })
    }
  },
  created() {
    this.getAllWildOrder();
  }
}
</script>

<style scoped>

</style>