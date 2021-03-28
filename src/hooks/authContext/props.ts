export interface DataUserProps {
  avatar_url: string;
  name: string;
}

export interface AuthContextProps {
  signIn(user: string): Promise<void>;
  dataUser: DataUserProps;
}
