<template>
  <div class="home">
    <base-layout>
      <template v-slot:header>
        <Header></Header>
      </template>
      <div
        class="content uk-grid-column-small uk-grid-row-medium uk-text-center"
      >
        <div>
          <h2>Введите запрос</h2>
        </div>
        <div>
          <search-form />
        </div>
      </div>

      <template v-slot:footer>
        <Footer></Footer>
      </template>
    </base-layout>
  </div>
</template>

<script>
import SearchForm from "../components/Search-form/Search-form.vue";
import Footer from "../components/Footer/Footer.vue";
import Header from "../components/Header/Header.vue";
import BaseLayout from "../Layouts/Base-layout.vue";
export default {
  name: "Home",
  components: { BaseLayout, Header, Footer, SearchForm },
};
</script>
