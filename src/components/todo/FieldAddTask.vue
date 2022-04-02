<template>
  <v-text-field
    v-model="newTaskTitle"
    @keyup.enter="addTask"
    class="pa-3"
    outlined
    placeholder="Add Task"
    hide-details
    clearable
  >
    <template v-slot:append>
      <!-- <v-fade-transition leave-absolute>
        <v-progress-circular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        ></v-progress-circular>
      </v-fade-transition> -->
      <v-icon @click="addTask" :disabled="!newTaskTitle"
        >mdi-plus</v-icon
      >
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: '',
      loading: false,
    };
  },
  methods: {
    addTask() {
      if (this.newTaskTitle) {
          this.$store.dispatch('addTask', {
            title: this.newTaskTitle,
            text: 'New task added.',
          });
        this.newTaskTitle = '';
      }
    },
  },
};
</script>
