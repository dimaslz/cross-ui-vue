<script>
import Vue from 'vue';

import '@cross-ui/core/dist/cross-ui/cross-ui.css';

export default Vue.extend({
  name: 'ServeDev',
  methods: {
    onButtonClick() {
      console.log("onButtonClick");
    }
  }
});
</script>

<template>
  <div id="app">
    <cui-button @click="onButtonClick">my button</cui-button>
  </div>
</template>
