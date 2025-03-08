import { defineStore } from 'pinia'
import crudBaseStore from '@/stores/crudBaseStore'
import api from '@/apis/business/menuFontendAPI';

const crudBase = new crudBaseStore(
  {
    field: {
      key: "menu_id",
      code: 'menu_code',
    }
  },
  api,
);

class moduleMenuFontend {
  state = () => {
    return {
      ...crudBase.state,
    }
  }
  actions = {
    ...crudBase.actions,
  }
}

const store = new moduleMenuFontend();
const useStore = defineStore('moduleMenuFontend', store);

export default useStore;