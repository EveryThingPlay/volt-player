<template>
  <div class="index">
    <PlaylistCard
      round
      centered
      author="Noisia"
      title="Split the atom"
      img="https://f4.bcbits.com/img/a3909086815_65"
    ></PlaylistCard>
  </div>
</template>

<script setup>
import PlaylistCard from '~/components/common/PlaylistCard.vue';
</script>

<style lang="scss" scoped>
.index {
  padding: 1%;
}
</style>
