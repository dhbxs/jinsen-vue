<template>
  <div>
    <el-table
        :data="tableData"
        border: false
        fit: true
        style="width: 100%">
      <el-table-column
          prop="uid"
          label="用户ID">
      </el-table-column>
      <el-table-column
          prop="username"
          label="用户名">
      </el-table-column>
      <el-table-column
          prop="phone"
          label="电话">
      </el-table-column>
      <el-table-column
          prop="email"
          label="邮箱">
      </el-table-column>
      <el-table-column
          prop="gender"
          label="性别">
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="toModifyUser(scope.$index, scope.row)"
              icon="el-icon-edit">编辑
          </el-button>
          <el-button
              size="mini"
              type="danger"
              @click="deleteUser(scope.$index, scope.row)"
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
          :total="10">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {userGetAll, deleteUser, getUserInfoPage} from "@/http/api/user";

export default {
  name: "user-setting",
  data() {
    return {
      tableData: [],
      gender: false,
      pageSize: 6,
      pageNum: 1,
    }
  },
  methods: {
    handleEdit(index, item) {
      if (item)
        this.gender = true
    },
    getAllUserInfo() {
      userGetAll().then(res => {
        // this.tableData = res.data;
        let result = res.data;
        for (let i = 0; i < result.length; i++) {
          if (result[i].gender === 0) {
            result[i].gender = "女";
          } else {
            result[i].gender = "男";
          }
        }
        this.tableData = result;
      })
    },
    toModifyUser(index, item) {
      this.$router.push({
        name: "modify-user",
        params: {
          tableData: this.tableData[index]
        }
      })
    },
    deleteUser(index, item) {
      let uid = {"uid": this.tableData[index].uid}
      console.log(uid);
      deleteUser(uid).then(res => {
        console.log(res);
        this.$message.success("删除成功");
        location.reload();
      })
    },
    handleCurrentChange(pageNum) {
      getUserInfoPage({pageNum: pageNum, pageSize: this.pageSize}).then(res => {
        // console.log(res);
        let result = res.data;
        for (let i = 0; i < result.length; i++) {
          if (result[i].gender === 0) {
            result[i].gender = "女";
          } else {
            result[i].gender = "男";
          }
        }
        this.tableData = result;
      })
    },
    handleSizeChange(pageSize) {
      getUserInfoPage({pageNum: this.pageNum, pageSize: pageSize}).then(res => {
        let result = res.data;
        for (let i = 0; i < result.length; i++) {
          if (result[i].gender === 0) {
            result[i].gender = "女";
          } else {
            result[i].gender = "男";
          }
        }
        this.tableData = result;
      })
    }
  },
  created() {
    this.handleCurrentChange(this.pageNum);
  }
}
</script>

<style scoped>
.paginationBtn {
  text-align: center;
  margin: 10px;
}
</style>
