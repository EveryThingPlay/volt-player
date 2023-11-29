<template>
  <div class="page">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,500;6..12,600;6..12,700&family=Rubik:wght@400;500;600&display=swap'); // Nunito Sans
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Rubik:wght@400;500;600&display=swap'); // Roboto

h4 {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
}

h5 {
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
}
.page {
  min-height: 100vh;
  background: linear-gradient(180deg, #030712 0%, #111827 100%);
  color: white;
}
</style>
