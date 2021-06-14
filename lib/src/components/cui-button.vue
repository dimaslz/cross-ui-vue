<template>
	<div>
		<cross-button
      :color="color"
      :circle="circle"
      :square="square"
      :pill="pill"
      :outline="outline"
    >
      <slot />
    </cross-button>
	</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "CuiButton",
  props: {
    pill: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "primary",
    },
  },
  mounted() {
    this.$el.onclick = this.onClickHandler.bind(this);
  },
  methods: {
    onClickHandler($event) {
      this.$emit("click", $event);
    },
  },
});
</script>