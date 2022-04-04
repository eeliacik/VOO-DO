<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      width="160"
      :mobile-breakpoint="768"
      app
    >
      <!-- <v-img
        class="pa-4"
        src="../public/vintage-typewriter-keys.jpeg"
        gradient="to top left, rgba(29, 69, 149, .5), rgba(29, 69, 149, .95)"
        :height="$route.path === '/' ? 220 : 150"
      ></v-img> -->
      <v-container class="drawer-header pa-5" height="">
        <v-avatar size="100">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" class="" />
        </v-avatar>
      <v-divider></v-divider>
          <div class="text-subtitle-1 font-weight-bold">John Denyo</div>
          <div class="text-subtitle-2">denyo_john</div>
      </v-container>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item color="blue-grey lighten-1" v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      prominent
      :height="$route.path === '/' ? 220 : 150"
    >
      <template v-slot:img="{ props }">
        <v-img
          src="../public/typewriter.jpeg"
          v-bind="props"
          gradient="to top right, rgba(29, 69, 149, .4), rgba(29, 69, 149, .9)"
        ></v-img>
      </template>

      <v-container class="header-container pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search></search>
        </v-row>
        <v-row>
          <v-toolbar-title class="ml-4 font-weight-black">{{
            appTitle
          }}</v-toolbar-title>
        </v-row>
        <v-row>
          <live-date-time></live-date-time>
        </v-row>
        <v-row v-if="$route.path === '/'">
          <field-add-task></field-add-task>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
      <snackbar></snackbar>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    snackbar: require('@/components/shared/Snackbar.vue').default,
    search: require('@/components/tools/Search.vue').default,
    'live-date-time': require('@/components/tools/LiveDateTime.vue').default,
    'field-add-task': require('@/components/todo/FieldAddTask.vue').default,
  },
  data: () => ({
    drawer: null,
    items: [
      { title: 'ToDo', icon: 'mdi-format-list-checks', to: '/' },
      { title: 'About', icon: 'mdi-help-box', to: '/about' },
    ],
  }),
  computed: {
    appTitle() {
      return this.$store.getters.appTitle;
    },
  },
};
</script>

<style lang="sass">
.drawer-header
  display: flex
  flex-direction: column
  align-items: center
.header-container
  max-width: none !important
.v-toolbar__content
  padding-top: 15px !important
</style>
