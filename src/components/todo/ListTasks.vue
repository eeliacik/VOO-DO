<template>
  <div class="pt-0" flat>
    <v-list>
      <draggable v-model="tasks" handle=".handle">
        <task-item
          v-for="task in tasks"
          :key="task.id"
          :task="task"
        ></task-item>
      </draggable>
    </v-list>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    'task-item': require('@/components/todo/TaskItem.vue').default,
    draggable,
  },
  computed: {
    tasks: {
      get() {
        return this.$store.getters.filteredTasks;
      },
      set(value) {
        this.$store.commit('updateTasksList', value);
      },
    },
  },
  methods: {
    doneSorting() {
      this.$store.commit('toggleSorting');
    },
  },
};
</script>
