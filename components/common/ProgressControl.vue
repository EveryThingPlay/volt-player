<template>
  <div
    ref="control"
    class="progressControl"
    @click="handleClick"
  >
    <div
      class="progressControl-bar"
      :style="`width: ${progress}%`"
    >
      <div
        class="progressControl-bar-dot"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {usePlayerStore} from '#imports';

const {player, progress} = storeToRefs(usePlayerStore());
const control = ref<HTMLElement>();

function handleClick(e:MouseEvent) {
	const distance = control.value ? e.pageX - control.value.offsetLeft : 0;
	const seekWidth = control.value?.offsetWidth;
	// @ts-ignore
	progress.value = (distance / seekWidth) * 100;
	if (player.value) {
		player.value.currentTime = player.value.duration * progress.value / 100;
	}
}
</script>

<style scoped lang="postcss">
.progressControl {
  @apply h-1.5 w-80 rounded-full bg-gray-600 mt-10 m-auto;

  .progressControl-bar {
    @apply h-full w-20 bg-gray-300 rounded-full flex flex-row justify-end items-center;
  }

  @media(hover: hover) {
    &:hover {
      .progressControl-bar {
        @apply bg-teal-500;

        .progressControl-bar-dot {
          @apply h-2.5 w-2.5 bg-white rounded-full;
        }
      }
    }
  }
}
</style>
