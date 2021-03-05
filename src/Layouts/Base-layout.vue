<template>
  <div class="uk-container container">
    <header class="header">
      <slot name="header"> </slot>
    </header>
    <main class="main uk-flex uk-flex-column uk-flex-center">
      <slot></slot>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "base-layout",
};
</script>

<style>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  flex: 0 0 auto;
}
.main {
  flex: 1 0 auto;
}
.footer {
  flex: 0 0 auto;
}
</style>
