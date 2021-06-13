<template>
  <div id="app" class="flex flex-col">
    <div class="flex">
      <cui-button
        v-for="(color, index) of colors"
        :color="color"
        :key="index"
        @click="onClick"
      >{{ color }}</cui-button>
    </div>
    <div class="flex">
      <cui-button
        v-for="(color, index) of colors"
        :color="color"
        :key="index"
        @click="onClick"
        outline
      >{{ color }}</cui-button>
    </div>
    <div class="flex">
      <cui-button
        v-for="(color, index) of colors"
        :color="color"
        :key="index"
        pill
        @click="onClick"
      >{{ color }}</cui-button>
    </div>
    <div class="flex">
      <cui-button
        v-for="(color, index) of colors"
        :color="color"
        :key="index"
        @click="onClick"
        outline
        pill
      >{{ color }}</cui-button>
    </div>
    <div class="flex">
      <cui-button
        v-for="(color, index) of colors"
        :color="color"
        :key="index"
        @click="onClick"
        square
      ><icon /></cui-button>
    </div>
    <div class="flex">
      <cui-button
        v-for="(color, index) of colors"
        :color="color"
        :key="index"
        @click="onClick"
        circle
      ><icon /></cui-button>
    </div>
    <div class="flex">
      <cui-button
        v-for="(color, index) of colors"
        :color="color"
        :key="index"
        @click="onClick"
        outline
        square
      ><icon /></cui-button>
    </div>
    <div class="flex">
      <cui-button
        v-for="(color, index) of colors"
        :color="color"
        :key="index"
        @click="onClick"
        outline
        circle
      ><icon /></cui-button>
    </div>
  </div>
</template>

<script>
import Icon from './components/icon.vue';

export default {
  name: 'App',
  data() {
    return {
      colors: ['primary', 'secondary', 'accent', 'danger', 'warning', 'success', 'info'],
    };
  },
  components: {
    Icon,
  },
  methods: {
    onClick() {
      console.log("onClick");
    }
  }
}
</script>

<style lang="scss">
@import '~tailwindcss/base.css';
@import '@cross-ui/core/dist/cross-ui/cross-ui';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
