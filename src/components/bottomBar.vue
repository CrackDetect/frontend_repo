<template>
  <v-app>
    <v-bottom-navigation v-model="activeTab" app>
      <v-btn
        :to="{ name: 'homePage' }"
        value="home"
        icon
      >
        <v-icon>mdi-home</v-icon>
        <span>home</span>
      </v-btn>
      <v-btn
        :to="{ name: 'upLoadPage' }"
        value="upload"
        icon
      >
        <v-icon>mdi-upload</v-icon>
        <span>upload</span>
      </v-btn>
      <v-btn
        :to="{ name: 'listPage' }"
        value="list"
        icon
      >
        <v-icon>mdi-view-list</v-icon>
        <span>list</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      activeTab: null,
    };
  },
};
</script>