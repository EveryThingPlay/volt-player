<template>
  <div class="PlayerControls">
    <button
      :class="`PlayerControls-button ${compact? 'compact':''}`"
      @click="backward"
    >
      <img src="../../assets/svg/backward.svg">
    </button>
    <button
      :class="`PlayerControls-centerButton ${compact? 'compact':''}`"
      @click="togglePlayer(player)"
    >
      <img
        v-if="!isPlaying"
        src="../../assets/svg/play.svg"
        class="ml-0.5"
      >
      <img
        v-if="isPlaying"
        src="../../assets/svg/pause.svg"
      >
    </button>
    <button
      :class="`PlayerControls-button ${compact? 'compact':''}`"
      @click="forward"
    >
      <img src="../../assets/svg/forward.svg">
    </button>
  </div>
</template>

<script setup lang="ts">
import {usePlayerStore} from '../../stores/playerStore';

defineProps({
	compact: {
		type: Boolean,
		default: false,
	},
	player: {
		type: Object,
		required: true,
	},
});

const store = usePlayerStore();

const {isPlaying} = storeToRefs(store);

const {forward, backward, togglePlayer} = store;
</script>

<style scoped lang="postcss">
.PlayerControls {
  @apply flex gap-12 justify-center items-center;

  .PlayerControls-button {
    -webkit-tap-highlight-color: transparent !important;
    @apply active:opacity-80;
    &.compact {
      @apply h-5 w-8;
    }
  }

  .PlayerControls-centerButton {
    -webkit-tap-highlight-color: transparent !important;
    @apply rounded-full h-20 w-20 bg-white flex flex-col items-center justify-center active:opacity-80 active:scale-95 duration-100;
    &.compact {
      @apply h-10 w-10;
      img {
        @apply h-5 w-5;
      }
    }
  }
}
</style>
