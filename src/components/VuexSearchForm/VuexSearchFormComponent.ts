import { Component, Vue } from 'vue-property-decorator';
import Template from './VuexSearchFormTemplate.vue';
// @ts-ignore
import Datepicker from 'vuejs-datepicker';
// @ts-ignore
import * as langs from 'vuejs-datepicker/src/locale';
import { OptionsSearchForm } from '@/types';

enum Options {
  'Si' = 1,
  'No' = 0,
}

@Component({
  mixins: [Template],
  components: {
    Datepicker,
  },
})
export default class VuexSearchForm extends Vue {
  private options: OptionsSearchForm[] = [
    { text: 'Si', value: true },
    { text: 'No', value: false },
  ];
  private languages = langs;
  private lang: string = 'es';

  // En vez de usar Vuex con Actions y Mutatios
  // Vamos a usar propieades computadas y
  // acceder directamente a la store
  get query() {
    return this.$store.state.filter.query;
  }
  set query(value: string) {
    this.$store.commit('setFilter', {
      filter: 'query',
      value,
    });
  }

  get from() {
    return new Date(this.$store.state.filter.from, 1, 1);
  }
  set from(value) {
    this.$store.commit('setFilter', {
      filter: 'from',
      value: new Date(value).getFullYear(),
    });
  }

  get to() {
    return new Date(this.$store.state.filter.to, 1, 1);
  }
  set to(value) {
    this.$store.commit('setFilter', {
      filter: 'to',
      value: new Date(value).getFullYear(),
    });
  }

  get min_price() {
    return this.$store.state.filter.min_price;
  }
  set min_price(value) {
    this.$store.commit('setFilter', {
      filter: 'min_price',
      value: parseFloat(value),
    });
  }

  get max_price() {
    return this.$store.state.filter.max_price;
  }
  set max_price(value) {
    this.$store.commit('setFilter', {
      filter: 'max_price',
      value: parseFloat(value),
    });
  }

  get available() {
    return this.$store.state.filter.available;
  }
  set available(value: string) {
    this.$store.commit('setFilter', {
      filter: 'available',
      value,
    });
  }
  private resetFilter(): void {
    this.$store.commit('resetFilter');
  }
}
