<template>
  <div class="home">

    <field-add-task></field-add-task>

    <list-tasks v-if="this.tasks.length"></list-tasks>

    <no-tasks v-else></no-tasks>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    'field-add-task': require('@/components/todo/FieldAddTask.vue').default,
    'list-tasks': require('@/components/todo/ListTasks.vue').default,
    'no-tasks': require('@/components/todo/NoTasks.vue').default
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
};
</script>

