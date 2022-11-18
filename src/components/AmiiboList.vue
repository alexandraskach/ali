<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import axios from "axios";
const API_AMIIBO = "https://www.amiiboapi.com/api/amiibo";
const ROUTE_NAME_DETAILS = "amiiboSingle"
const listeAmiibo = ref([]);
// const isDataReady = ref(false);
onBeforeMount(async () => {
  console.log("on before mount");
  const allAmiibo = await axios.get(API_AMIIBO);
  console.log(allAmiibo);
  const { data } = allAmiibo;
  listeAmiibo.value = data.amiibo;
});

console.log(listeAmiibo)
</script>
<template>
<div id="page-wrapper">
<!-- Main -->
  <section id="main">
    <div class="container">
      <!-- Content -->
        <article class="box post">
          <header>
            <h2>Ma Collection</h2>
            <p>le nb d'amiibo: {{listeAmiibo.length}}</p>
          </header>
          <p>
            <table>
              <tr>
                <th>Character</th>
                <th>game Series</th>
                <th>Action</th>
              </tr>
              <tr v-for="perso in listeAmiibo" :key="perso.tail">
                <td>{{perso.character}}</td>
                <td>{{perso.gameSeries}}</td>
                <td><RouterLink :to={name:ROUTE_NAME_DETAILS,params:{tailId:perso.tail}}><button>voir</button></RouterLink></td>
              </tr>
            </table>
          </p>
        </article>
    </div>
  </section>
</div>
</template>
