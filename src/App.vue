<template>
  <div id="app">

    <!-- Main -->
    <div class="container-fluid">

      <!-- Divide into sections -->
      <div class="row">

        <!-- Left Section -->
        <div class="col">
        </div>

        <!-- Center Section -->
        <div class="col-10">
          <h1 class="display-3"><router-link :to="{name: 'Home'}">Students</router-link></h1>
          <br>
          <router-view />
        </div>

        <!-- Right Section -->
        <div class="col">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Poppins;
  margin-top: 60px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
