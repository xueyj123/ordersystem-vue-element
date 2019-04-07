
<template>
  <div class="slideBar">
    <el-col>
      <el-menu
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="1" class="padding-0">
          <span slot="title"
            ><router-link to="/home" exact>点菜</router-link></span
          >
        </el-menu-item>
        <el-menu-item index="2" class="padding-0">
          <span slot="title"
            ><router-link :to="{ name: 'orderManage' }"
              >订单管理</router-link
            ></span
          >
        </el-menu-item>
        <el-menu-item index="3" class="padding-0">
          <span slot="title"
            ><router-link :to="{ name: 'staffManage' }"
              >人员管理</router-link
            ></span
          >
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style lang='scss' scoped>
.slideBar {
  background-color: #f56c6c;
  height: 100%;
  .padding-0 {
    padding: 0 !important;
    background-color: #f56c6c;
  }
  li {
    border-bottom: 1px solid #fff;

    a {
      display: block;
      color: #fff;
      text-decoration: none;
      font-size: 20px;
      text-align: center;
    }
    .router-link-active {
      color: #000;
      background-color: #ddd;
    }
  }
}
</style>
