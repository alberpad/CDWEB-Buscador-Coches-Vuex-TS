import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import vuexLocal from '@/plugins/vuex-persist';
import { RootState, Cars } from '@/types';
import cars from './data/cars';

Vue.use(Vuex);

const defaultFilter = () => {
  return {
    query: '',
    from: 2005,
    to: 2015,
    min_price: 0,
    max_price: 20000,
    available: false,
  };
};

const store: StoreOptions<RootState> = {
  state: {
    appName: 'Buscador de coches',
    appVersion: '0.0.1',
    cars,
    filter: defaultFilter(),
  },
  mutations: {
    setFilter(state: RootState, data: any) {
      // @ts-ignore
      state.filter[data.filter] = data.value;
    },
    resetFilter(state: RootState) {
      state.filter = defaultFilter();
    },
  },
  getters: {
    filteredCars(state: RootState): Cars[] {
      let cars = state.cars;
      cars = cars.filter((car) => car.available === state.filter.available);
      if (state.filter.query.length > 1) {
        cars = cars.filter((car) => car.car_model.includes(state.filter.query));
      }
      if (state.filter.from) {
        cars = cars.filter((car) => car.car_model_year >= state.filter.from);
      }
      if (state.filter.to) {
        cars = cars.filter((car) => car.car_model_year <= state.filter.to);
      }
      if (state.filter.min_price) {
        cars = cars.filter((car) => {
          const price = parseFloat(car.price.replace('$', ''));
          return price >= state.filter.min_price;
        });
      }
      if (state.filter.max_price) {
        cars = cars.filter((car) => {
          const price = parseFloat(car.price.replace('$', ''));
          return price <= state.filter.max_price;
        });
      }
      return cars;
    },
  },
  plugins: [vuexLocal.plugin],
};

export default new Vuex.Store<RootState>(store);
