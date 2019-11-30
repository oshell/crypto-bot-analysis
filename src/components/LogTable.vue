<template>
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
</template>

<script>
import StorageService from '../service/StorageService';

export default {
  name: 'LogTable',

  data: () => ({
    logs: []
  }),

  created: function() {
    this.updateLogs();
  },

  methods: {
    updateLogs: function() {
      StorageService.getJsonStorage().then((response) => {
        this.logs = response.data.logs.reverse();
      });
    }
  }
};
</script>

<style scoped>
th.text-left, td {
  text-align: left;
}
</style>