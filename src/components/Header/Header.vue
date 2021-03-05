<template>
  <nav class="uk-navbar-container uk-margin" uk-navbar>
    <div class="uk-navbar-left">
      <router-link to="/" class="uk-navbar-item uk-logo">Logo</router-link>

      <ul class="uk-navbar-nav">
        <li>
          <a href="#">
            <span
              class="uk-icon uk-margin-small-right"
              uk-icon="icon: star"
            ></span>
            Features
          </a>
        </li>
      </ul>

      <div class="uk-navbar-item">
        <div>Some <a href="#">Link</a></div>
      </div>

      <div class="uk-navbar-item">
        <form action="javascript:void(0)">
          <input
            class="uk-input uk-form-width-small"
            type="text"
            placeholder="Input"
          />
          <button class="uk-button uk-button-default">Button</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>
