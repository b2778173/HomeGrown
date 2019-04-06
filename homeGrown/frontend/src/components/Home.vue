<template>
  <div>
    <Breadcrumb class="breadCrumb" separator=">">
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
    </Breadcrumb><br>
    <!-- <breadCrumb></breadCrumb> -->
    <carousel></carousel>
    <router-link to="products"><img class="content" src="../../static/assets/img/ads4.jpg"></router-link>
    <router-link to=""><img class="content" src="../../static/assets/img/ads5.jpg"></router-link>
    <router-view></router-view>
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script src="./Home.js"></script>
