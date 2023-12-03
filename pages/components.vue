<template>
  <div class="index flex flex-col gap-4">
    <PlaylistCard
      centered
      author="Noisia"
      title="Split the atom"
      img="https://sun9-21.userapi.com/impf/c636022/v636022799/2957a/ffxCm-U4-3Q.jpg?size=510x537&quality=96&sign=3f6ba4470132d4eba796546e0d4c551d&type=album"
    />
    <TrackCard
      author="Noisia"
      title="Closer"
      duration="3:00"
      img="https://sun9-21.userapi.com/impf/c636022/v636022799/2957a/ffxCm-U4-3Q.jpg?size=510x537&quality=96&sign=3f6ba4470132d4eba796546e0d4c551d&type=album"
    />
    <TextField v-model="model" />
    {{ model }}
    <PlayerControls />
  </div>
</template>

<script setup>
import PlaylistCard from '~/components/common/PlaylistCard.vue';
import TrackCard from '~/components/common/TrackCard.vue';
import TextField from '~/components/common/TextField.vue';
import PlayerControls from '~/components/common/PlayerControls.vue';

const model = ref();
</script>

<style lang="scss" scoped>
.index {
  padding: 1%;
}
</style>
