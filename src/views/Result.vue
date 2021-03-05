<template>
  <div class="result">
    <base-layout>
      <template v-slot:header>
        <Header></Header>
      </template>
      <div
        class="content uk-grid-column-small uk-grid-row-medium uk-text-center uk-flex uk-flex-center"
      >
        <template v-if="entity !== null">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
            <h3 class="uk-card-title">{{ entity.value }}</h3>
            <p>Сущность вашего запроса: {{ entity.type }}</p>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <router-link to="/">назад</router-link>
          </div>
        </template>
        <template v-else>
          <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
            <h3 class="uk-card-title">Упс</h3>
            <p>Что-то пошло не так</p>
          </div>
        </template>
      </div>

      <template v-slot:footer>
        <Footer></Footer>
      </template>
    </base-layout>
  </div>
</template>

<script>
import Footer from "../components/Footer/Footer.vue";
import Header from "../components/Header/Header.vue";
import BaseLayout from "../Layouts/Base-layout.vue";
export default {
  name: "Result",
  components: { BaseLayout, Header, Footer },
  props: {
    entity: {
      type: Object,
      required: false,
      default: null,
    },
  },
};
</script>

<style></style>
