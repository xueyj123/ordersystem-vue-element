<template>
  <div class="product-often">
    <div v-for="(item1) of list" :key="item1.id" class="fl item">
      <h1>{{item1.classify}}</h1>
      <ul>
        <ProductItem v-for="item2 of item1.productList" :productInfo="item2" :key="item2.id"></ProductItem>
      </ul>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import ProductItem from "./components/productItem";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    ...Vuex.mapMutations(["orderAdd"]),
    add(item) {
      this.orderAdd(item);
    }
  },
  components: {
    ProductItem
  },
  created() {
    this.$axios.get("https://www.fuhushi.com/web10/xyj/ordersystem/getinfo.php").then(responseData => {
      this.list = responseData.data.list;
    });
  }
};
</script>
<style lang='scss' scoped>
.product-often {
  height: 100%;
  .item {
    text-align: center;
    width: 33.33%;
    height: 100%;
    
  }
}
</style>

