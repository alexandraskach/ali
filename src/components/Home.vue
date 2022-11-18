<script setup></script>

<template>
  <div id="page-wrapper">
    <!-- Banner -->
    <section id="banner">
      <header>
        <h2>Hey.Bienvenue sur ma collection</h2>
      </header>
    </section>
    <!-- Intro -->
    <section id="intro" class="container">
      <div class="row">
        <div class="col-4 col-12-medium">
          <section class="middle">
            <img
              src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png"
            />
            <header>
              <h2>character</h2>
            </header>
            <p>gameSeries</p>
          </section>
        </div>
        <div class="col-4 col-12-medium">
          <section class="middle">
            <img
              src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png"
            />
            <header>
              <h2>character</h2>
            </header>
            <p>gameSeries</p>
          </section>
        </div>
        <div class="col-4 col-12-medium">
          <section class="middle">
            <img
              src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png"
            />
            <header>
              <h2>character</h2>
            </header>
            <p>gameSeries</p>
          </section>
        </div>
      </div>
      <footer>
        <ul class="actions">
          <li>
            <router-link to="/amiibo-list"
              ><button class="button large">Liste complète</button></router-link
            >
          </li>
        </ul>
      </footer>
    </section>
  </div>
</template>

<style scoped></style>
