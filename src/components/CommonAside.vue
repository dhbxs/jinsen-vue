<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <el-menu-item index="1">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-postcard"></i>
        <span slot="title">采伐证管理系统</span>
      </template>

      <el-menu-item index="2-1">录入采伐证</el-menu-item>
      <el-menu-item index="2-2">采伐证汇总</el-menu-item>
      <el-menu-item index="2-3">采伐证退证</el-menu-item>
      <el-menu-item index="2-4">采伐证使用情况</el-menu-item>
      <el-menu-item index="2-5">查询上周出材量</el-menu-item>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-office-building"></i>
        <span slot="title">生产管理系统</span>
      </template>

      <el-submenu index="3-1">
        <template slot="title">
          <span slot="title">施工方管理</span>
        </template>
        <el-menu-item index="3-1-1">施工方资料卡</el-menu-item>
        <el-menu-item index="3-1-2">施工方台账</el-menu-item>
      </el-submenu>

      <el-submenu index="3-2">
        <template slot="title">
          <span slot="title">工程包管理</span>
        </template>
        <el-menu-item index="3-2-1">创建工程包</el-menu-item>
        <el-menu-item index="3-2-2">审核工程包</el-menu-item>
        <el-menu-item index="3-2-3">工程包执行情况</el-menu-item>
      </el-submenu>

      <el-submenu index="3-3">
        <template slot="title">
          <span slot="title">野账管理</span>
        </template>
        <el-menu-item index="3-3-1">野账录入</el-menu-item>
        <el-menu-item index="3-3-2">野账审核</el-menu-item>
        <el-menu-item index="3-3-3">野账打印</el-menu-item>
        <el-menu-item index="3-3-4">工单输入信息管理</el-menu-item>
      </el-submenu>

      <el-submenu index="3-4">
        <template slot="title">
          <span slot="title">伐区管理</span>
        </template>
        <el-menu-item index="3-4-1">伐区拨交</el-menu-item>
        <el-menu-item index="3-4-2">伐区管理</el-menu-item>
        <el-menu-item index="3-4-3">伐区管理台账</el-menu-item>
      </el-submenu>

      <el-submenu index="3-5">
        <template slot="title">
          <span slot="title">生产结算和报表</span>
        </template>
        <el-menu-item index="3-5-1">生产工资和其他费用</el-menu-item>
        <el-menu-item index="3-5-2">生产其他费用台账</el-menu-item>
        <el-menu-item index="3-5-3">生产工资结算</el-menu-item>
        <el-menu-item index="3-5-4">生产工资台账</el-menu-item>
        <el-menu-item index="3-5-5">木材销售货款结算</el-menu-item>
        <el-menu-item index="3-5-6">木材销售货款台账</el-menu-item>
      </el-submenu>

      <el-menu-item index="3-6">录入已生产量</el-menu-item>
      <el-menu-item index="3-7">生产总台帐</el-menu-item>
    </el-submenu>

    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-sell"></i>
        <span slot="title">销售管理系统</span>
      </template>

      <el-submenu index="4-1">
        <template slot="title">
          <span slot="title">合同管理</span>
        </template>
        <el-menu-item index="4-1-1">创建合同</el-menu-item>
        <el-menu-item index="4-1-2">合同进度</el-menu-item>
      </el-submenu>

      <el-submenu index="4-2">
        <template slot="title">
          <span slot="title">客户信息管理</span>
        </template>
        <el-menu-item index="4-2-1">创建客户信息</el-menu-item>
        <el-menu-item index="4-2-2">查看客户信息</el-menu-item>
      </el-submenu>

      <el-submenu index="4-3">
        <template slot="title">
          <span slot="title">销售调令管理</span>
        </template>
        <el-menu-item index="4-3-1">录入销售调令</el-menu-item>
        <el-menu-item index="4-3-2">查看调令材料</el-menu-item>
      </el-submenu>

      <el-submenu index="4-4">
        <template slot="title">
          <span slot="title">销售结算</span>
        </template>
        <el-menu-item index="4-4-1">木材销售结算</el-menu-item>
        <el-menu-item index="4-4-2">木材销售结算台账</el-menu-item>
      </el-submenu>

      <el-submenu index="4-5">
        <template slot="title">
          <span slot="title">库存与销售</span>
        </template>
        <el-menu-item index="4-5-1">木材进仓库存</el-menu-item>
        <el-menu-item index="4-5-2">木材出仓销售</el-menu-item>
        <el-menu-item index="4-5-3">木材库存</el-menu-item>
      </el-submenu>

      <el-menu-item index="4-6">打印销售码单</el-menu-item>
    </el-submenu>

    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span slot="title">检尺员平台</span>
      </template>

      <el-menu-item index="5-1">录入进仓木材数据</el-menu-item>
      <el-menu-item index="5-2">进仓木材数据审核</el-menu-item>
      <el-menu-item index="5-3">录入出仓木材数据</el-menu-item>
      <el-menu-item index="5-4">录入一道直销数据</el-menu-item>
      <el-menu-item index="5-5">删除工单数据</el-menu-item>
      <el-menu-item index="5-5">删除重复木材信息</el-menu-item>
    </el-submenu>

    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-message"></i>
        <span slot="title">信息中心</span>
      </template>

      <el-menu-item index="6-1">审核伐区工单</el-menu-item>
      <el-menu-item index="6-2">审核装车照片</el-menu-item>
      <el-menu-item index="6-3">审核野账数据</el-menu-item>
    </el-submenu>

    <el-submenu index="7">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">系统管理</span>
      </template>

      <el-menu-item index="7-1">人员信息管理</el-menu-item>
      <el-menu-item index="7-1">木材销售报表</el-menu-item>
      <el-menu-item index="7-1">木材产出报表</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "CommonAside",
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
