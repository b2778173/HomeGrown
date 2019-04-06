<template>
  <div class="content">
    <div class="productsImg">
      <v-img id="main" :src="product.picture.src1[0]"></v-img>
    </div>
    <p>{{product.title}}</p>
    <Divider/>
    <div class="colorBlock form-inline">
      <v-img src="https://s3.lativ.com.tw/i/40696/40696011/4069601_48.jpg" style="margin:10px" @mouseover="chooseColor(0)" @click="chooseColor(0)"></v-img>
      <v-img src="https://s3.lativ.com.tw/i/40696/40696021/4069602_48.jpg" style="margin:10px" @mouseover="chooseColor(1)" @click="chooseColor(1)"></v-img>
      <v-img src="https://s3.lativ.com.tw/i/40696/40696031/4069603_48.jpg" style="margin:10px" @mouseover="chooseColor(2)" @click="chooseColor(2)"></v-img>
    </div>
    <RadioGroup v-model="size" type="button" size="small">
      <Radio label="S"></Radio>
      <Radio label="M"></Radio>
      <Radio label="L"></Radio>
      <Radio label="XL"></Radio>
    </RadioGroup>
    <Divider/>
    <input-number mode="s" :min="1"></input-number>
    <Button @click="addCart">加入購物車</Button>
    <div class="productsImgBig" v-for="pic in product.picture.src" :key="pic">
      <v-img :src="pic"></v-img>
    </div>
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script>
export default {
  name: "",
  mixins: [],
  extends: {},
  components: {},
  props: [],
  data() {
    return {
      size: "",
      product: {
        title: "STAR WARS系列印花T恤-14-童（ 鐵灰 -110） ",
        picture: {
          src1: [
            "https://s3.lativ.com.tw/i/40696/40696011/4069601_500.jpg",
            "https://s3.lativ.com.tw/i/40696/40696021/4069602_500.jpg",
            "https://s3.lativ.com.tw/i/40696/40696021/4069603_500.jpg"
          ],

          src: [
            "https://s1.lativ.com.tw/i/40696/40696_D_21.jpg",
            "https://s2.lativ.com.tw/i/40696/40696_D_82.jpg",
            "https://s3.lativ.com.tw/i/40696/40696_D_23.jpg",
            "https://s4.lativ.com.tw/i/40696/40696_D_24.jpg",
            "https://s1.lativ.com.tw/i/40696/40696_D_25.jpg",
            "https://s2.lativ.com.tw/i/40696/40696_D_26.jpg",
            "https://s3.lativ.com.tw/i/40696/40696_D_27.jpg",
            "https://s4.lativ.com.tw/i/40696/40696_D_28.jpg",
            "https://s1.lativ.com.tw/i/CommonPicture/1541/WASH_TW.jpg"
          ]
        }
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  methods: {
    addCart() {
      this.$Notice.success({
        title: "成功",
        desc: this.product.title + "已加入購物車",
        top: 200
      });
    },
    chooseColor(i) {
      return this.product.picture.src1[i];
      console.log(this.product.picture.src1[i])
    }
  }
};
</script>
