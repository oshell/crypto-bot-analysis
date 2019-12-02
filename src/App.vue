<template>
  <div id="app">
    <v-toolbar>
      <v-toolbar-title class="toolbar-title">Crypto Bot Status</v-toolbar-title>
    </v-toolbar>
    <v-container id="app">
      <v-row>
        <v-col cols="12">
           <Info />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Info from "./components/Info";

export default {
  name: "App",

  components: {
    Info
  },

  data: () => ({
    //
  })
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.toolbar-title {
  font-weight: bold;
  text-align: center;
  width: 100%;
}
</style>
