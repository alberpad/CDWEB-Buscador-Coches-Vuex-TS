<template>
  <div id="app">
    <vuex-search-form></vuex-search-form>
    <vuex-search-list></vuex-search-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VuexSearchList from './components/VuexSearchList/VuexSearchListComponent';
import VuexSearchForm from './components/VuexSearchForm/VuexSearchFormComponent';

@Component({
  components: {
    VuexSearchList,
    VuexSearchForm,
  },
})
export default class App extends Vue {}
</script>
