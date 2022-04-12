<template>
    <el-menu default-active="1" :collapse="isCollapse" background-color="#545c64" text-color="#fff"
             active-text-color="#ffd04b">

        <!--  logo  -->
        <div class="logo">
            <b>{{ isCollapse ? '金森' : '金森林业材积智能检尺系统' }}</b>
        </div>

        <!--  首页  -->
        <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
        </el-menu-item>

        <!--  采伐证管理系统  -->
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-postcard"></i>
                <span slot="title">采伐证管理系统</span>
            </template>

            <el-menu-item index="2-1">录入采伐证</el-menu-item>
            <el-menu-item index="2-2">采伐证汇总</el-menu-item>
            <el-menu-item index="2-3">采伐证退证</el-menu-item>
            <el-menu-item index="2-4">采伐证使用情况</el-menu-item>
        </el-submenu>

        <!--  生产管理系统  -->
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
        </el-submenu>

        <!--  检尺员平台  -->
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
            <el-menu-item index="5-6">删除重复木材信息</el-menu-item>
        </el-submenu>

        <!--  信息中心  -->
        <el-submenu index="6">
            <template slot="title">
                <i class="el-icon-message"></i>
                <span slot="title">信息中心</span>
            </template>

            <el-menu-item index="6-1">审核伐区工单</el-menu-item>
            <el-menu-item index="6-2">审核装车照片</el-menu-item>
            <el-menu-item index="6-3">审核野账数据</el-menu-item>
        </el-submenu>

        <!--  系统管理  -->
        <el-submenu index="7">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">系统管理</span>
            </template>

            <el-menu-item index="7-1">人员信息管理</el-menu-item>
            <el-menu-item index="7-2">木材销售报表</el-menu-item>
            <el-menu-item index="7-3">木材产出报表</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name: "CommonAside",
    data() {
        return {
            menu: []
        }
    },
    methods: {},
    computed: {
        isCollapse() {
            return this.$store.state.tab.isCollapse;
        }
    },
};
</script>

<style lang="less" scoped>

.el-menu {
    max-width: 190px;
    height: 100vh;
    border: none;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none; // FireFox 隐藏滚动条
    -ms-overflow-style: none; // IE10+ 隐藏滚动条

    .logo {
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #fff;
    }

    // Chrome 和 Safari 隐藏滚动条
    &::-webkit-scrollbar {
        display: none;
        /* width: 0; */
    }
}

</style>
