<template>
  <div class="home">

    <!-- <field-add-task></field-add-task> -->

    <list-tasks v-if="this.tasks.length"></list-tasks>

    <no-tasks v-else></no-tasks>

<sort-done-button 
    v-if="$store.state.sorting"
    @close="doneSorting"
    ></sort-done-button>

  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    // 'field-add-task': require('@/components/todo/FieldAddTask.vue').default,
    'list-tasks': require('@/components/todo/ListTasks.vue').default,
    'no-tasks': require('@/components/todo/NoTasks.vue').default,
    'sort-done-button': require('@/components/todo/SortDoneButton.vue').default,
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  methods: {
    doneSorting() {
      this.$store.commit('toggleSorting');
    },
  }
};
</script>

