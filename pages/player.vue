<template>
  <div class="player">
    <span class="player-header">Currently playing</span>
    <div class="player-body">
      <img
        class="player-body-cover"
        :src="track.image? track.image : '/album.png'"
      >
      <div class="player-body-text">
        <h3>{{ track.title }}</h3>
        <h5>{{ track.artist }}</h5>
      </div>
      <PlayerControls
        class="player-body-controls"
        :player="(player as HTMLAudioElement)"
      />
      <ProgressControl :player="(player as HTMLAudioElement)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PlayerControls from '~/components/common/PlayerControls.vue';
import ProgressControl from '~/components/common/ProgressControl.vue';

const {track, player} = storeToRefs(usePlayerStore());
onMounted(() => {
	player.value = new Audio(track.value.src);
});

</script>

<style scoped lang="postcss">
  .player-header {
    font-family: 'Roboto', sans-serif;
    @apply font-bold text-center m-auto block pt-4
  }

  .player-body-cover {
    @media (max-width: 425px) {
      @apply !w-72 !h-72 block m-auto !mt-9;
    }
    @apply w-3/12 h-1/4 block m-auto mt-48;
  }

  .player-body-text {
    @apply flex flex-col m-auto w-3/12 mt-6;
    @media (max-width: 425px) {
      @apply gap-2 mt-4 w-80;
      }
  }

  .player-body-controls {
    @apply mt-10
  }
</style>
