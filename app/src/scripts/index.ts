import type {UsersRecords} from "stores/example-store";

export const options = ['LDAP', 'Локальная']
export type typeOptions = 'LDAP' | 'Локальная'
export const defaultRecord = ():UsersRecords => (
  {
    tags: [],
    typeRecord: 'Локальная',
    login: null,
    password: null
  }
)
export const setLS = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
export const getLS = (key: string) => {
  return localStorage.getItem(key);
};
