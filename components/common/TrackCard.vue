<template>
  <div class="trackCard">
    <div class="trackCard-data">
      <img
        class="trackCard-data-image"
        :src="image"
      >
      <div class="trackCard-data-text">
        <h4>{{ title }}</h4>
        <h5>{{ author }}</h5>
      </div>
    </div>
    <div class="trackCard-data-duration">
      {{ duration }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
	title: {
		type: String,
		default: null,
	},
	author: {
		type: String,
		default: null,
	},
	duration: {
		type: String,
		default: null,
	},
	image: {
		type: String,
		default: '/album.png',
	},
});

// Const imageSource = reactive(require('~/assets/img/album.png'));

</script>

<style scoped lang="postcss">
.trackCard {
	-webkit-tap-highlight-color: transparent !important;

	@apply flex w-80 justify-between items-center cursor-pointer duration-100 active:bg-gray-800;
	@media (hover: hover) {
		@apply  hover:bg-gray-900;
	}

	.trackCard-data {
		@apply flex gap-2 w-full;

		.trackCard-data-image {
			@apply w-16 h-16;
		}

		.trackCard-data-text {
			@apply flex flex-col items-start justify-center;
		}
	}

	.trackCard-data-duration {
		@apply text-gray-200 me-2;
	}
}
</style>
