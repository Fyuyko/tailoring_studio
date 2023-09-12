<script setup>
  import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">

        <RouterLink to="/">
          <img alt="Vue logo" class="logo" src="@/assets/logoipsum-220.svg"/>
        </RouterLink>

        <div class="wrapper">
          <nav class="header__nav">
            <RouterLink class="header__nav-link" to="/">Home</RouterLink>
            <RouterLink class="header__nav-link" to="/about">About</RouterLink>
            <RouterLink class="header__nav-link" to="/404">Empty page</RouterLink>
          </nav>
        </div>

      </div>
    </div>
  </header>
  <RouterView/>

</template>

<style scoped lang="scss">
  @import "assets/styles/mixin";

  .header {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);

    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 10px 0;
    }

    &__nav {
      display: flex;
      gap: 30px;

      &-link {
        @include clickArea;

        &.router-link-active {
          color: #1C77FF;
        }
      }
    }
  }

</style>
