<template>
  <div class="order-current">
    <p class="total" v-if="orderList.length">
      总价：{{ getTotalPrice | moneyFormat }}（元）
    </p>
    <ul class="order-ul">
      <li class="fl">商品名称</li>
      <li class="fl">数量</li>
      <li class="fl">价格</li>
      <li class="fl">操作</li>
    </ul>

    <ul class="order-ul" v-for="item of orderList" :key="item.id">
      <li class="fl">
        <span>{{ item.name }}</span>
      </li>
      <li class="fl">
        <span>{{ item.count }}</span>
      </li>
      <li class="fl">
        <span>{{ item.price }}</span>
      </li>
      <li class="fl">
        <span class="operation">
          <span @click="del(item)">删除</span>
          <span @click="reduce(item)">-</span>
          <span @click="add(item)">+</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "orderCurrent",
  computed: {
    ...Vuex.mapState(["orderList"]),
    getTotalPrice() {
      let total = 0;
      this.orderList.map(function(item) {
        total += item.count * item.price;
      });
      return total;
    }
  },
  methods: {
    ...Vuex.mapMutations(["orderDel", "orderIncrement", "orderDecrement"]),
    del(item) {
      this.orderDel(item);
    },
    reduce(item) {
      this.orderDecrement(item);
    },
    add(item) {
      this.orderIncrement(item);
    }
  }
};
</script>
<style lang='scss' scoped>
.order-ul {
  width: 100%;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
}
.order-ul li {
  width: 25%;
  text-align: center;
}
.order-ul .operation {
  color: #409eff;
}
.order-ul .operation span {
  padding: 0 5px;
  cursor: pointer;
  font-size: 17px;
}
</style>

