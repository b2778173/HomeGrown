<template>
  <div>
    <Breadcrumb class="breadCrumb" separator=">">
        <BreadcrumbItem to="/homePage">Home</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
      <v-app id="inspire" class="content">
        <v-layout justify-center>
          <v-flex xs12 sm12>
            <v-card>
              <v-container fluid grid-list-md>
                <v-layout row wrap>
                  <v-flex v-for="card in cards" :key="card.title" v-bind="{ [`xs${card.flex}`]: true }">
                    <v-card>
                      <v-img :src="card.src" height="200px" @click="viewDetails()">
                        <v-container fill-height fluid pa-2>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <span class="headline white--text" v-text="card.title"></span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-img>
                      <v-card-title>
                        <div class="cardText">
                          <span class="grey--text">Number 10</span><br>
                          <span>Whitehaven Beach</span><br>
                          <span>Whitsunday Island, Whitsunday Islands</span>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>favorite</v-icon>
                        </v-btn>
                        <v-btn icon>
                          <v-icon>shopping_cart</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-app>
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script src="./products.js"></script>

<style>

  /* .cardText {
    text-align: left
  } */

</style>
