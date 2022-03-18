<template>
  <div class="home">
    <v-list class="pt-0" flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item @click="doneTask(task.id)"
        :class="{ 'blue-grey lighten-5' : task.isDone }">
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.isDone"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title :class="{ 'text-decoration-line-through' : task.isDone }"> {{ task.title }}</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
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
          isDone: false,
        },
        {
          id: 2,
          title: 'Eat breakfast',
          isDone: true,
        },
        {
          id: 3,
          title: 'Go to butcher',
          isDone: false,
        },
      ],
    };
  },
  methods: {
    doneTask(id) {
      const task = this.tasks.find( task => task.id === id);
      task.isDone = !task.isDone;
    }
  },
};
</script>
