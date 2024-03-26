import { defineStore } from 'pinia';

export const useFilterStore = defineStore('filters', {
  state: () => ({
    category: '',
    startDate: '',
    endDate: '',
    categories: ['Electronics', 'Clothing', 'Books', 'Home', 'Beauty', 'Sports', 'Toys', 'Food', 'Other'],
    chat: []
  }),
  getters: {
    getCategories(): Array<string> {
      return this.categories;
    }
  },
  actions: {
    pushMessage(message: string){
      this.chat.push(message)
    }
  },
});
