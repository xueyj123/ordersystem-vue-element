<template>
  <div class="tabCon">
    <el-tabs
      v-model="activeName"
      type="border-card"
      @tab-click="handleClick"
      class="tabs"
    >
      <el-tab-pane v-for="(item, index) of tabBtns" class="fl " :key="index">
        <span slot="label" class="title">{{ item }}</span>
        <div class="tabContent" >
          <slot :name="'tabItem' + index"></slot>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  props: {
    tabBtns: {
      type: Array,
      required: true
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      switchIndex: 0,
      activeName: "0"
    };
  },
  created() {
    if (this.currentIndex) {
      this.switchIndex = this.currentIndex;
    }
  },
  computed: {},
  methods: {
    handleClick(tab, event) {
      this.switchIndex = tab.index;
    }
  }
};
</script>
<style lang='scss' scoped>
.tabCon {
  height: 100%;
  .fl {
    height: 100%;
    width: 100%;
  }
  .tabContent {
    height: 100%;
    overflow: auto;
  }
  .tabs {
    height: 100%;
  }
  .tabs /deep/ .el-tabs__nav {
    width: 100%;
    text-align: center;
    display: flex;
  }
  .tabs /deep/ .el-tabs__item {
    width: 25%;
    padding: 0;
  }
  .tabs /deep/ .el-tabs__content {
    padding: 0;
    height: 100%;
  }
  .title {
    font-size: 16px;
  }
}
</style>

