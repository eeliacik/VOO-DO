<template>
  <div>
    <v-list-item
      @click="doneTask(task.id)"
      :class="{ 'blue-grey lighten-5': task.isDone }"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="task.isDone" color="primary"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.isDone }"
          >
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
            {{ task.dueDate | niceDate }}
          </v-list-item-action-text>
        </v-list-item-action>

        <v-list-item-action>
          <task-menu :task="task"></task-menu>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { format } from 'date-fns';

export default {
  props: ['task'],
  components: {
    'task-menu': require('@/components/todo/TaskMenu.vue').default,
  },
  filters: {
    niceDate(value) {
      return format(new Date(value), 'MMM dd');
    },
  },
  methods: {
    doneTask(id) {
      this.$store.dispatch('doneTask', {
        id: id,
        text: this.task.isDone ? 'Task not completed.' : 'Task completed.',
      });
    },
  },
};
</script>
