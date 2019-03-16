<template>
  <div>
    <div id="">
      <v-app id="inspire">
        <v-layout justify-center>
          <v-flex xs12 sm12>  
            <v-card>
              <v-container fluid grid-list-md>
                <v-layout row wrap>
                  <v-flex v-for="card in cards" :key="card.title" v-bind="{ [`xs${card.flex}`]: true }">
                    <v-card>
                      <v-img :src="card.src" height="200px">
                        <v-container fill-height fluid pa-2>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <span class="headline white--text" v-text="card.title"></span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-img>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>favorite</v-icon>
                        </v-btn>
                        <v-btn icon>
                          <v-icon>shopping_cart</v-icon>
                        </v-btn>
                        <v-btn icon>
                          <v-icon>mode_comment</v-icon>
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
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script src="./products.js"></script>
