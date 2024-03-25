import { defineStore } from 'pinia';

export const usecounterStore = defineStore('counter', {
  state: () => ({
    category: ,
    startDate: '',
    endDate: '',
    categories: ['Electronics', 'Clothing', 'Books', 'Home', 'Beauty', 'Sports', 'Toys', 'Food', 'Other'],
  }),
  getters: {
    getCategories(): Array<string> {
      return this.categories;
    }
  },
  actions: {
    
  },
});
