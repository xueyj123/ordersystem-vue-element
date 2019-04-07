<template>
  <div class="order-register">
    <OrderCustom :orderCustomData="list"></OrderCustom>
  </div>
</template>

<script>
import OrderCustom from "../components/OrderCustom";
export default {
  props: {
    list: {
      type: Array
    }
  },
  components: {
    OrderCustom
  }
};
</script>
<style lang='scss' scoped>
</style>

