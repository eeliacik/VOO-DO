<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" @click="handleClick(i)">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <dialog-delete
      v-if="dialogDelete"
      @close="dialogDelete = false"
      @delete="deleteTask"
      :task="task"
    ></dialog-delete>
    <dialog-edit
      v-if="dialogEdit"
      @close="dialogEdit = false"
      :task="task"
    ></dialog-edit>
  </div>
</template>

<script>
export default {
  components: {
    'dialog-delete': require('@/components/todo/dialogs/DialogDelete.vue')
      .default,
    'dialog-edit': require('@/components/todo/dialogs/DialogEdit.vue')
      .default,
  },
  props: ['task'],
  data: () => ({
    items: [
      {
        text: 'Edit',
        icon: 'mdi-pencil',
        click() {
          console.log('edit');
          this.dialogEdit = true;
        },
      },
      {
        text: 'Due date',
        icon: 'mdi-calendar',
        click() {
          console.log('due date');
        },
      },
      {
        text: 'Delete',
        icon: 'mdi-delete',
        click() {
          console.log('delete');
          this.dialogDelete = true;
        },
      },
    ],
    dialogDelete: false,
    dialogEdit: false,
  }),
  methods: {
    deleteTask(id) {
      this.$store.dispatch('deleteTask', { id: id, text: 'Task deleted.' });
    },
    handleClick(i) {
        this.items[i].click.call(this);
    },
  },
};
</script>

<style></style>
