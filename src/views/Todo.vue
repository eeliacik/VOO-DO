<template>
  <div class="home pa-6">
    <v-list flat>
      <v-list-item v-for="task in tasks" :key="task.id">
        <template v-slot:default="{ active }">
          <v-list-item-action>
            <v-checkbox :input-value="active" color="primary"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> {{ task.title }}</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: 'Do stretches',
        },
        {
          id: 2,
          title: 'Eat breakfast',
        },
        {
          id: 3,
          title: 'Go to butcher',
        },
      ],
    };
  },
};
</script>
