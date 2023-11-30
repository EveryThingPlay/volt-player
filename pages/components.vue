<template>
  <div class="index flex flex-col gap-4">
    <PlaylistCard
      centered
      author="Noisia"
      title="Split the atom"
      img="https://f4.bcbits.com/img/a3909086815_65"
    ></PlaylistCard>
    <TrackCard></TrackCard>
  </div>
</template>

<script setup>
import PlaylistCard from '~/components/common/PlaylistCard.vue';
import TrackCard from '~/components/common/TrackCard.vue';
</script>

<style lang="scss" scoped>
.index {
  padding: 1%;
}
</style>
