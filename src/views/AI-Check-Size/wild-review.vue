<template>
  <div>
    <div class="topBtn">
      <el-input placeholder="请输入工单号" v-model="number" clearable class="search" size="mini"></el-input>
      <el-button type="primary" icon="el-icon-search" size="mini" @click="searchWorkOrder"></el-button>
      <el-button type="primary" size="mini" icon="el-icon-circle-plus" class="addbtn" @click="addInfo">添加</el-button>
    </div>
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
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="toModifyItem(scope.$index, scope.row)"
              icon="el-icon-edit">编辑
          </el-button>
          <el-button
              size="mini"
              type="danger"
              @click="deleteItem(scope.$index, scope.row)"
              icon="el-icon-delete">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="paginationBtn">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="pageNum"
          :page-sizes="[6, 10, 20, 30]"
          :page-size="pageSize"
          background
          layout="sizes, prev, pager, next"
          :total="20">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {
  getAllWildOrderInfo,
  findWildOrderByPage,
  deleteWorkOrderAndWildBill,
  searchWorkOrderAndWildBillByNumber
} from "@/http/api/wild-order";

export default {
  name: "wild-review",
  data() {
    return {
      tableDate: [],
      pageNum: 1,
      pageSize: 6,
      number: null,
    }
  },
  methods: {
    getAllWildOrder() {
      getAllWildOrderInfo().then(res => {
        if (res.state === 200) {
          this.tableDate = res.data;
        }
      })
    },
    handleCurrentChange(pageNum) {
      findWildOrderByPage({pageNum: pageNum, pageSize: this.pageSize}).then(res => {
        if (res.state === 200) {
          this.tableDate = res.data;
        }
      })
    },
    handleSizeChange(pageSize) {
      findWildOrderByPage({pageNum: this.pageNum, pageSize: pageSize}).then(res => {
        if (res.state === 200) {
          this.tableDate = res.data;
        }
      })
    },
    toModifyItem(index, item) {
      this.$router.push({
        name: "wild-modify",
        params: {tableData: this.tableDate[index]}
      })
    },
    deleteItem(index, item) {
      deleteWorkOrderAndWildBill(this.tableDate[index]).then(res => {
        if (res.state == 200) {
          this.$message.success("删除成功");
          location.reload();
        }
      })
    },
    addInfo() {
      this.$router.push("wild-add");
    },
    searchWorkOrder() {
      searchWorkOrderAndWildBillByNumber({number: this.number}).then(res => {
        if (res.state === 200) {
          this.tableDate = res.data;
        }
      })
    }
  },
  created() {
    this.handleCurrentChange(this.pageNum);
  }
}
</script>

<style lang="less" scoped>
.addbtn {
  float: right;
  margin-bottom: 10px;
}

.paginationBtn {
  text-align: center;
  margin: 10px;
}

.topBtn {
  .search {
    display: inline-block;
    margin: 0 10px 10px 0;
    width: 30%;
  }
}
</style>