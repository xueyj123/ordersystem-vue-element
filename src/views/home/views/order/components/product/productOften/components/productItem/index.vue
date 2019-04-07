<template>
  <li>
    <img v-bitmap="productInfo.imgUrl" src="/static/place.jpg">
    <p>
      <span>{{productInfo.name}}</span>
      <span>{{productInfo.price}}(元)</span>
    </p>
    <button @click="add()">点击添加</button>
  </li>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "ProductItem",
  props: {
    productInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...Vuex.mapMutations(["orderAdd"]),
    add() {
      this.orderAdd(this.productInfo);
    }
  }
};
</script>
<style lang='scss' scoped>
li {
  padding: 10px;
}
h1 {
  margin-bottom: 10px;
}
img {
  width: 100%;
}
button {
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  background-color: #f56c6c;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;
}
</style>

