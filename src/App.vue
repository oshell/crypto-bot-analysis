<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>Crypto Bot Analysis</v-toolbar-title>
    </v-app-bar>
    <v-container id="app">
      <v-row>
        <v-col cols="12">
          <v-card class="ma-12" outlined tile>
            <LogTable />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import LogTable from "./components/LogTable";

export default {
  name: "App",

  components: {
    LogTable
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
</style>
