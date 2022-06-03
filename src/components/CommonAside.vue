<template>
  <el-menu default-active="/" :collapse="isCollapse" background-color="#545c64" text-color="#fff"
           active-text-color="#ffd04b" :unique-opened=true>

    <!--  logo  -->
    <div class="logo">
      <b>{{ isCollapse ? '金森' : '金森林业材积智能检尺系统' }}</b>
    </div>

    <!--  动态渲染一级菜单  -->
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <!--  动态渲染二级菜单  -->
      <el-submenu v-for="item in hasChildren" :index="item.label" :key="item.label">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>

        <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
          <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{ subItem.label }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "CommonAside",
  data() {
    return {
      menu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          label: '智能检尺系统',
          icon: 's-custom',
          children: [
            {
              path: '/wild-entry',
              name: 'wild-entry',
              label: '野账智能录入',
              url: 'WildEntry/WildEntry'
            },
            {
              path: '/wild-review',
              name: 'wild-review',
              label: '野账审核',
              url: 'WildReview/WildReview'
            },
            {
              path: '/wild-print',
              name: 'wild-print',
              label: '野账打印',
              url: 'WildPrint/WildPrint'
            }
          ]
        },
        {
          label: '信息中心',
          icon: 'postcard',
          children: [
            {
              path: '/photo-review',
              name: 'photo-review',
              label: '上传文件复查',
              url: 'PhotoReview/PhotoReview'
            },
          ]
        },
        {
          label: '系统管理',
          icon: 'setting',
          children: [
            {
              path: '/user-setting',
              name: 'user-setting',
              label: '用户管理',
              url: 'UserSetting/UserSetting'
            },
          ]
        },
      ]
    }
  },
  methods: {
    clickMenu(item){
      // console.log(item.name);
      this.$router.push({
        name: item.name,
      })
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
    noChildren() {
      // console.log(this.menu.filter(item => !item.children));
      return this.menu.filter(item => !item.children);
    },
    hasChildren() {
      // console.log(this.menu.filter(item => item.children));
      return this.menu.filter(item => item.children);
    }
  },
};
</script>

<style lang="less" scoped>

.el-menu {
  //width: 230px;
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

.el-menu:not(.el-menu--collapse) {
  width: 230px;
}

</style>
