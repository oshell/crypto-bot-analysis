<template>
  <v-row>
    <v-col cols="3">Trades: {{ countTrades }}</v-col>
    <v-col cols="3">Success Rate</v-col>
    <v-col cols="3">Profit per Trade</v-col>
    <v-col cols="3">Profit absolute</v-col>
    <v-col cols="12">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Date</th>
              <th class="text-left">Action</th>
              <th class="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="log in logs" :key="log._id">
              <td>{{ log.date }}</td>
              <td>{{ log.action }}</td>
              <td>{{ log.status.status }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import StorageService from "../service/StorageService";

export default {
  name: "LogTable",

  data: () => ({
    logs: []
  }),

  created: function() {
    this.updateLogs();
  },

  computed: {
    countTrades: function() {
      return this.logs.filter(log => {
        return (
          log.status.hasOwnProperty("performance") &&
          log.status.performance !== 0
        );
      }).length;
    }
  },

  methods: {
    updateLogs: function() {
      StorageService.getJsonStorage().then(response => {
        this.logs = response.data.logs.reverse();
      });
    }
  }
};
</script>

<style scoped>
th.text-left,
td {
  text-align: left;
}
</style>