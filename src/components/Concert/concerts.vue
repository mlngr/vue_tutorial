<template>
  <v-container>
    <v-layout row wrap v-for="concert in concerts" :key="concert.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info">
          <v-container fluid md-elevation="10">
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  :src="concert.imageUrl"
                  height="200px"
                ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="white--text mb-0">{{ concert.title }}</h5>
                    <div>{{ concert.date | date }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat :to="'/concerts/' + concert.id">
                    <v-icon left light>arrow_forward</v-icon>
                    View concert
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      concerts () {
        return this.$store.getters.loadedConcerts
      }
    }
  }
</script>
