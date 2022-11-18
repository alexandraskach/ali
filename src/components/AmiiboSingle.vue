<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
const route = useRoute();
const API_AMIIBO_TAIL = "https://www.amiiboapi.com/api/amiibo/?tail=";
const currentAmiibo = ref([]);

onBeforeMount(async () => {
  console.log("on before mount");
  const amiibo = await axios.get(API_AMIIBO_TAIL + route.params.tailId);
  console.log(amiibo);
  const { data } = amiibo;
  currentAmiibo.value = data.amiibo;
});
console.log(currentAmiibo);
</script>
<template>
  <div id="page-wrapper">
    <!-- Main -->
    <section id="main">
      <div class="container">
        <div class="row">
          <div class="col-4 col-12-medium">
            <!-- Sidebar -->
            <section class="box">
              <header>
                <h3>Infos</h3>
              </header>
              <p>
                amiiboSeries: <b>{{ currentAmiibo[0].amiiboSeries }}</b> <br />
                character: {{ currentAmiibo[0].character }}<br />
                gameSeries: {{ currentAmiibo[0].gameSeries }}<br />
                type: {{ currentAmiibo[0].type }}
              </p>
            </section>
            <section class="box">
              <header>
                <h3>Dates sorties</h3>
              </header>

              <ul class="divided">
                <li v-if="currentAmiibo[0].release.au">
                  au: {{ currentAmiibo[0].release.au }}
                </li>
                <li v-if="currentAmiibo[0].release.eu">
                  eu: {{ currentAmiibo[0].release.eu }}
                </li>
                <li v-if="currentAmiibo[0].release.jp">
                  jp: {{ currentAmiibo[0].release.jp }}
                </li>
                <li v-if="currentAmiibo[0].release.na">
                  na: {{ currentAmiibo[0].release.na }}
                </li>
              </ul>
            </section>
          </div>
          <div class="col-8 col-12-medium imp-medium">
            <!-- Content -->
            <article class="box post">
              <a href="#" class="featured"
                ><img :src="currentAmiibo[0].image" alt=""
              /></a>
              <header>
                <h2>{{ currentAmiibo[0].character }}</h2>
                <p>{{ currentAmiibo[0].type }}</p>
              </header>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
