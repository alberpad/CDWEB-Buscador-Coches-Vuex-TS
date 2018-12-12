// Importar este plugin en la store, no en el main
import VuexPersistence from 'vuex-persist';
export default new VuexPersistence({
  storage: window.localStorage,
  modules: ['authModule'],
});
