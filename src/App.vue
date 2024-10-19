<template>
  <searchBar/>
  <router-view/>
  <buttomBar/>
</template>

<script>
import buttomBar from './components/bottomBar.vue';
import searchBar from './components/searchBar.vue';

export default{
  name: 'App',
  components:{
    searchBar,
    buttomBar,
  }
}
</script>