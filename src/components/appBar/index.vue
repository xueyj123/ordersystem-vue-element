<template>
  <div class="app-bar">
    <h1 class="bar-title">{{barTitle}}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    barTitle: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang='scss' scoped>
.app-bar {
  .bar-title {
    font-size: 18px;
    color: grey;
    text-align: center;
  }
}
</style>

