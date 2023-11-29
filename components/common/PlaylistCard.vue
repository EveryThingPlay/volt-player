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

<style scoped lang="scss">

  .playlistCard-body-image {
    width: 160px;
    height: 160px;

		&.round {
			border-radius: 80px;
		}
  }

  .playlistCard-body {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 4px;
    transition-duration: 0.1s;
  }
  .playlistCard-body-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
	}

  @media (hover: hover) {
    .playlistCard-body:hover {
      background: #ffffff20;
      transition-duration: 0.1s;
    }
  }
  .playlistCard-body:active {
    background: #ffffff30;
    transition-duration: 0.1s;
    transform: scale(0.97);
    -webkit-tap-highlight-color: transparent !important;
  }

  .playlistCard {
    width: 160px;
    height: 212px;
  }
</style>
