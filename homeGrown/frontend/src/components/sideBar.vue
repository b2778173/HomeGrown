<template>
  <div id="sidebar" class="" @click="console.log(this.$ref)">
    <Menu active-name="1-2" :open-names="['1']" class="sidebar" style="font-size:18px; width:auto">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-sunny-outline" />
          季節
        </template>
        <MenuItem name="1-1">春裝館</MenuItem>
        <MenuItem name="1-2">夏裝館</MenuItem>
        <MenuItem name="1-3">秋裝館</MenuItem>
        <MenuItem name="1-4">冬裝館</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-filing" />
          最新商品
        </template>
        <Submenu name="3">
          <template slot="title">女裝</template>
          <MenuItem name="3-1">裙裝</MenuItem>
          <MenuItem name="3-2">洋裝</MenuItem>
           <MenuItem name="3-3">牛仔系列</MenuItem>
          <MenuItem name="3-4">細肩帶背心</MenuItem>
        </Submenu>
        <Submenu name="4">
          <template slot="title">男裝</template>
          <MenuItem name="3-1">印花短T</MenuItem>
          <MenuItem name="3-2">POLO衫</MenuItem>
          <MenuItem name="3-3">內衣/背心</MenuItem>
        </Submenu>
      </Submenu>
      <Submenu name="4">
        <template slot="title">
          <Icon type="ios-cog" />
          熱賣
        </template>
        <MenuItem name="4-1">Option 9</MenuItem>
        <MenuItem name="4-2">Option 10</MenuItem>
        <MenuItem name="4-3">Option 11</MenuItem>
        <MenuItem name="4-4">Option 12</MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>
<script>
  export default {
    name: '',
    mixins: [],
    extends: {},
    components: {},
    props: [],
    data() {
      return {};
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    updated() {},
    beforeDestroy() {},
    methods: {
      
    },
  };

</script>
