export interface StatusMsg {
  [key: number]: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  refresh_token: string | null;
}

export interface ResMsg {
  status: string;
  message: string;
  errors: string[];
  data: User[];
}

export interface UserBody {
  username: string;
  email: string;
  password: string;
}

export interface ResMsgAuth {
  status: string;
  message: string;
  errors: string[];
  accessToken: string;
}
