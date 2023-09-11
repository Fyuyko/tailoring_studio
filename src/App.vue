<script setup>
import { RouterLink, RouterView } from "vue-router";


</script>

<template>
  <header class="header">

    <RouterLink to="/">
      <img alt="Vue logo" class="logo" src="@/assets/logoipsum-220.svg"/>
    </RouterLink>

    <div class="wrapper">
      <nav>
        <RouterLink class="header__link" to="/">Home</RouterLink>
        <RouterLink class="header__link" to="/about">About</RouterLink>
        <RouterLink class="header__link" to="/404">Empty page</RouterLink>
      </nav>
    </div>

  </header>
  <RouterView />

</template>

<style scoped lang="scss">

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 60px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);

    &__link {
      //@include clickArea;
    }
  }

</style>
