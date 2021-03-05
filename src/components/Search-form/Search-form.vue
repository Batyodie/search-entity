<template>
  <form @submit.prevent>
    <div class="uk-margin">
      <div class="uk-inline">
        <a class="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
        <input
          v-model="keyword"
          class="uk-input uk-form-width-large"
          type="text"
        />
        <button
          @click.prevent="checkSearch"
          class="uk-button uk-button-default"
          :disabled="ValidInput"
        >
          найти
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { getEntity } from "@/helpers/helpers";
import { getSearch } from "@/api/search.api.js";

export default {
  name: "Search-form",
  data() {
    return {
      keyword: "",
      entity: null,
    };
  },
  computed: {
    ValidInput() {
      return this.keyword.length <= 3 ? true : false;
    },
  },
  methods: {
    async checkSearch() {
      const entity = getEntity(this.keyword);
      const result = await getSearch(entity);

      console.log(result);
      this.entity = { ...result.entity };

      this.$router.push({ name: "Result", params: { entity: this.entity } });
      this.keyword = "";
    },
  },
};
</script>
