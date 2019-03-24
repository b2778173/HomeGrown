<template>
  <div>
    <template v-if="data.length">
      <h3>我的購物車：</h3>
      <div class="product">
        <div class="item">
          <span class="btn btn-default">商品名稱</span>
          <span class="btn btn-default left">商品單價</span>
          <span class="btn btn-default left">商品數量</span>
          <span class="btn btn-default left">操作</span>
        </div>
        <div
          class="item"
          style="padding:5%;border: 1px solid black"
          v-for="item in data"
          :key="item.id"
        >
          <span class="btn btn-default">{{item.name}}</span>
          <span class="btn btn-default left" style="margin-left: 18%">{{item.price}}</span>
          <span>
            <em class="btn btn-primary add" v-on:click="add(item)" :class="{off:item.count==11}">+</em>
            {{item.count}}
            <em
              class="btn btn-primary reduce"
              v-on:click="reduce(item)"
              :class="{off:item.count==1}"
            >-</em>
          </span>
          <span class="btn btn-danger left" v-on:click="remove(item)">移除</span>
        </div>
      </div>
      <h2>清單：</h2>
      <span class="btn btn-primary">商品總價：{{price}}</span>
    </template>
    <template v-else>
      <div class="jumbotron">
        <h1>您的購物車空了</h1>
        <p>是否去重新挑選</p>
        <p>
          <a class="btn btn-primary btn-lg" href="/HomeGrown/#/homePage" role="button">重新挑選</a>
        </p>
      </div>
    </template>
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script>
export default {
  data() {
    return {
      data: [
        {
          name: "IPhone 6",
          price: 5466,
          id: 1,
          count: 1
        },
        {
          name: "IMac",
          price: 7466,
          id: 2,
          count: 1
        },
        {
          name: "iPad",
          price: 5400,
          id: 3,
          count: 1
        }
      ]
    };
  },
  computed: {
    price: function() {
      var price = 0;
      for (var i = 0; i < this.data.length; i++) {
        var item = this.data[i];
        price += item.count * item.price;
      }
      return price;
    }
  },
  methods: {
    add(item) {
      let index = this.data.indexOf[item]; // get index of this.item
      if (item.count > 10) {
        return false;
      }
      item.count++;
    },
    reduce: function(item) {
      let index = this.data.indexOf[item];
      if (item.count <= 1) {
        return false;
      }
      item.count--;
    },
    remove: function(item) {
      //   this.data.$remove(item); deprecated!
      let index = this.data.indexOf(item);
      this.data.splice(index, 1);
    }
  }
};
</script>
