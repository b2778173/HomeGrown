<template>
    <div id="carouselExampleIndicators" class="carousel slide content" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" style="">
        <div class="carousel-item active">
          <img src="../../static/assets/img/ads1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../../static/assets/img/ads2.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../../static/assets/img/ads3.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
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
        drawer: true,
        theme: true,
        items: [{
            title: "Home",
            icon: "dashboard"
          },
          {
            title: "Abo22ut",
            icon: "question_answer"
          },
          {
            title: "211",
            icon: "android"
          },
          {
            title: "Buy",
            icon: "shopping_basket"
          },
          {
            title: "About",
            icon: "question_answer"
          },
          {
            title: "222",
            icon: "question_answer"
          },
          {
            title: "xxxxxxx",
            icon: "question_answer"
          },


        ],
        mini: true,
        right: null
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
<style>

</style>
