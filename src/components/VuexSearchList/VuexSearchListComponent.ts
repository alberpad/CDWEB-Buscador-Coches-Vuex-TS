import { Component, Vue } from 'vue-property-decorator';
import Template from './VuexSearchListTemplate.vue';
import { Cars } from '@/types';
import { Getter } from 'vuex-class';

@Component({
  mixins: [Template],
})
export default class VuexSearchList extends Vue {
  @Getter('filteredCars') public filteredCars!: Cars[];

  private numberOfColumns: number = 3;

  private available(bool: boolean): string {
    return bool ? 'Sí' : 'No';
  }
  private carModel(carModel: string): string {
    return `Modelo: ${carModel}`;
  }
  private blockRandom(): string {
    return `block-${Math.floor(Math.random() * 6) + 1}`;
  }
}
