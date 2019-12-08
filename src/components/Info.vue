<template>
  <v-row>
    <v-col cols="12" md="4" xs="12">
      <div class="ma-12 info-box">
        <div class="title">Ticker</div>
        <div class="value">{{info.ticker}}</div>
      </div>
    </v-col>

    <v-col cols="12" md="4" xs="12">
      <div class="ma-12 info-box">
        <div class="title">Current Status</div>
        <div :class="['value', info.status === 'long' ? 'positive' : '', info.status === 'short' ? 'negative' : '']">{{info.status}}</div>
      </div>
    </v-col>

    <v-col cols="12" md="4" xs="12">
      <div class="ma-12 info-box">
        <div class="title">Last Updated</div>
        <div class="value">{{info.updated}} GMT</div>
      </div>
    </v-col>

    <v-col cols="12" md="4" xs="12">
      <div class="ma-12 info-box">
        <div class="title">Leverage</div>
        <div class="value">{{info.leverage}}x</div>
      </div>
    </v-col>

    <v-col cols="12" md="4" xs="12" v-if="info.entry">
      <div class="ma-12 info-box">
        <div class="title">Current Entry</div>
        <div class="value">{{info.entry}} USD</div>
      </div>
    </v-col>

    <v-col cols="12" md="4" xs="12" v-if="info.sl">
      <div class="ma-12 info-box">
        <div class="title">Current Stop-Loss</div>
        <div class="value">{{info.sl}} USD</div>
      </div>
    </v-col>

    <v-col cols="12" md="4" xs="12" v-if="info.pl">
      <div class="ma-12 info-box">
        <div class="title">Current Profit/Loss</div>
        <div :class="['value', info.pl > 0 ? 'positive' : 'negative']">{{info.pl}}%</div>
      </div>
    </v-col>

    <v-col cols="12" md="4" xs="12">
      <div class="ma-12 info-box">
        <div class="title">Profit per Trade</div>
        <div :class="['value', info.profitPerTrade > 0 ? 'positive' : 'negative']">{{info.profitPerTrade}}%</div>
      </div>
    </v-col>

    <v-col cols="12" md="4" xs="12">
      <div class="ma-12 info-box">
        <div class="title">Profit Absolute</div>
        <div :class="['value', info.profitAbsolute > 0 ? 'positive' : 'negative']">{{info.profitAbsolute}}%</div>
      </div>
    </v-col>

    <v-col cols="12" md="4" xs="12">
      <div class="ma-12 info-box">
        <div class="title">Last Close</div>
        <div class="value">{{info.lastClose}} USD</div>
      </div>
    </v-col>

    <v-col cols="12" md="4" xs="12">
      <div class="ma-12 info-box">
        <div class="title">Number of Trades</div>
        <div class="value">{{info.numTrades}}</div>
      </div>
    </v-col>

    <v-col cols="12" md="4" xs="12">
      <div class="ma-12 info-box">
        <div class="title">Success Rate</div>
        <div class="value">{{info.successRate}}%</div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import StorageService from "../service/StorageService";

export default {
  name: "Info",

  data: () => ({
    info: {}
  }),

  created: function() {
    this.updateInfo();
  },

  methods: {
    updateInfo: function() {
      StorageService.getJsonStorage().then(response => {
        this.info = response.data;
      });
    }
  }
};
</script>

<style scoped>
.info-box {
  text-align: left;
  padding: 20px 30px;
  font-weight: bold;
  background: #fff;
  box-shadow: 0px 0px 2px grey;
}

.title {
  color: grey;
}

.value {
  font-size: 30px;
}

.positive {
  color: #1eaa24;
}

.negative {
  color: #ff5252
}
</style>