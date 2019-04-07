
<template>
  <div class="order">
    <AppBar barTitle="订单栏" class="fl left-app-bar height-100">
      <Tab :tabBtns="orderBtns" class="left-tab">
        <OrderCurrent slot="tabItem0">tab1</OrderCurrent>
        <OrderRegister slot="tabItem1">tab2</OrderRegister>
        <OrderPaid slot="tabItem2">tab3</OrderPaid>
        <OrderCancel slot="tabItem3">tab4</OrderCancel>
      </Tab>
    </AppBar>
    <AppBar barTitle="产品栏" class="fl right-app-bar height-100">
      <Tab :tabBtns="productBtns" class="right-tab">
        <ProductOften slot="tabItem0">tab1</ProductOften>
        <ProductMain slot="tabItem1">tab2</ProductMain>
      </Tab>
    </AppBar>
  </div>
</template>

<script>
import OrderCancel from "./components/allOrder/orderCancel";
import OrderCurrent from "./components/allOrder/orderCurrent";
import OrderPaid from "./components/allOrder/orderPaid";
import OrderRegister from "./components/allOrder/orderRegister";
// //
import ProductOften from "./components/product/productOften";
import ProductMain from "./components/product/productMain";
export default {
  name: "order",
  data() {
    return {
      orderBtns: ["当前订单", "挂单中", "已付款", "取消的订单"],
      productBtns: ["常点食品", "主菜单"]
    };
  },
  components: {
    OrderCancel,
    OrderCurrent,
    OrderPaid,
    OrderRegister,

    ProductOften,
    ProductMain
  }
};
</script>

<style lang='scss' scoped>
.order {
  .left-app-bar {
    width: 389px;
  }
  .right-app-bar {
    width: 709px;
  }
}
</style>
