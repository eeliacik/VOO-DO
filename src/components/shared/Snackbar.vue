<template>
  <v-snackbar v-model="snackbar.show">
    {{ snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="blue-grey lighten-1"
        text
        v-bind="attrs"
        @click="snackbar.show = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    snackbar() {
      return this.$store.state.snackbar;
    },
  },
};
</script>

<style lang="sass">
  div.v-snack:not(.v-snack--absolute) 
    height: 100%
</style>
