export interface User {
  email: string;
  password: string;
  id: string;
}

export enum UserKeys {
  Email = 'email',
  Id = 'id',
}
