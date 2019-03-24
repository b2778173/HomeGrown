<template>
  <div class="content">
    <div class="productsImg">
      <v-img :src="product.picture.src"></v-img>
    </div>
    <p>{{product.title}}</p>
    <Divider />
    <RadioGroup v-model="size" type="button" size="small">
      <Radio label="S"></Radio>
      <Radio label="M"></Radio>
      <Radio label="L"></Radio>
      <Radio label="XL"></Radio>
    </RadioGroup>
    <Divider />
    <input-number mode="s" :min="1"></input-number>
    <Button>加入購物車</Button>
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
        size: '',
        product: {
          title: "STAR WARS系列印花T恤-14-童（ 鐵灰 -110） ",
          picture: {
            src: "https://s3.lativ.com.tw/i/40995/40995011/4099501_500.jpg"
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
    methods: {}
  };

</script>
