<template>
  <v-btn color="primary" class="sort-done-button" @click="$emit('close')">
    Done
  </v-btn>
</template>

<style lang="sass">
.sort-done-button
  position: fixed
  bottom: 20px
  left: 50%
  transform: translateX(-50%)
</style>
