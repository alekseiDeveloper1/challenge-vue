import { defineStore } from 'pinia';
import { getLS, setLS, type typeOptions} from "src/scripts";
type TagRecord = {
  text: string;
}
export interface UsersRecords {
  tags: TagRecord[];
  typeRecord: typeOptions;
  login: string | null;
  password: string | null;
}

export const useCounterStore = defineStore('counter', {
  state: ():{usersRecords:UsersRecords[]} => ({
    usersRecords: []
  }),

  getters: {
    state: (state) =>{
      const fromLS = getLS('list')
      if(fromLS) {
        state.usersRecords = JSON.parse(fromLS)
      }
      return [...state.usersRecords]
    },
  },

  actions: {
    setState(state: UsersRecords[]) {
      this.usersRecords = state;
      setLS('list', JSON.stringify(this.usersRecords))
    },
  },
});
