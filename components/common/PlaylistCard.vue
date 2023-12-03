<template>
  <div class="playlistCard">
    <div class="playlistCard-body">
      <img class="playlistCard-body-image" :src="img" :class="round? 'round':''">
      <div class="playlistCard-body-text" :class="centered? 'justify-center': ''">
        <h4 class="playlistCard-body-text-title" v-if="title">
          {{ title }}
        </h4>
        <h5 class="playlistCard-body-text-author" v-if="author">
          by {{ author }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script setup>

// eslint-disable-next-line no-unused-vars
const props = defineProps({
	title: {
		type: String,
		default: null,
	},
	author: {
		type: String,
		default: null,
	},
	img: {
		type: String,
		default: 'https://f4.bcbits.com/img/a4116063122_10.jpg',
	},
	round: {
		type: Boolean,
		default: false,
	},
	centered: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped lang="postcss">
  .playlistCard {
    width: 160px;
    height: 212px;
    -webkit-tap-highlight-color: transparent !important;

    .playlistCard-body {
      @apply cursor-pointer flex flex-col gap-1 duration-100 active:bg-gray-800 active:scale-95;
      @media (hover: hover) {
        @apply hover:bg-gray-900
      }

      .playlistCard-body-text {
        @apply flex flex-col gap-1;
      }

      .playlistCard-body-image {
        @apply w-40 h-40;
        &.round {
          border-radius: 80px;
        }
      }
    }
  }
</style>
