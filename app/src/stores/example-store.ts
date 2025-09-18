import { defineStore } from 'pinia';
import type {typeOptions} from "src/scripts";
type TagRecord = {
  text: string;
}
export interface UsersRecords {
  tags: TagRecord[];
  typeRecord: typeOptions;
  login: string;
  password: string | null;
  isPwd?: boolean;
}

export const useCounterStore = defineStore('counter', {
  state: ():{usersRecords:UsersRecords[]} => ({
    usersRecords: []
  }),

  getters: {
    state: (state) => [...state.usersRecords],
  },

  actions: {
    setState(state: UsersRecords[]) {

      this.usersRecords = [...this.usersRecords, ...state];
    },
  },
});
