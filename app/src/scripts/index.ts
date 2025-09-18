import type {UsersRecords} from "stores/example-store";

export const options = ['LDAP', 'Локальная']
export type typeOptions = 'LDAP' | 'Локальная'
export const defaultRecord = ():UsersRecords => (
  {
    tags: [],
    typeRecord: 'Локальная',
    login: '',
    password: null,
  }
)
