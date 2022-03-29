<template>
  <div class="pt-0" flat>
    <v-list>
      <task-item v-for="task in tasks" :key="task.id" :task="task"></task-item>
    </v-list>
  </div>
</template>

<script>
export default {
  components: {
    'task-item': require('@/components/todo/TaskItem.vue').default,
  },
  computed: {
    tasks() {
      return this.$store.getters.filteredTasks;
    },
  },
};
</script>
