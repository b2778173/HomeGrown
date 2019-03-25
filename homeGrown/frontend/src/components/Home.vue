<template>
  <div>
    <Breadcrumb style="margin-left: 15px;float: left;">
        <BreadcrumbItem to="/">
            <Icon type="ios-home-outline"></Icon> Home
        </BreadcrumbItem>    
    </Breadcrumb>
    <carousel></carousel>
    <router-link to="products"><img class="content" src="../../static/assets/img/ads4.jpg"></router-link>
      <img class="content" src="../../static/assets/img/ads5.jpg">
    <router-view></router-view>
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script src="./Home.js"></script>
