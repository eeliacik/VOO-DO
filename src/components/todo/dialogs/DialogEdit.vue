<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Edit Task </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="taskTitle"
          @keyup.enter="editTask()"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> cancel </v-btn>
        <v-btn
          color="red darken-1"
          :disabled="invalidInput"
          text
          @click="editTask()"
        >
          save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      taskTitle: null,
    };
  },
  computed: {
    invalidInput() {
      return !this.taskTitle || this.taskTitle === this.task.title;
    },
  },
  methods: {
    editTask() {
      if (!this.invalidInput) {
        const editData = {
          id: this.task.id,
          title: this.taskTitle,
          text: 'Task edited.',
        };
        this.$store.dispatch('editTask', editData);
        this.$emit('close');
      }
    },
  },
  mounted() {
    this.taskTitle = this.task.title;
  },
};
</script>
