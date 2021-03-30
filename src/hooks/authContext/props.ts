export interface UserProps {
  avatar_url: string;
  name: string;
}

export interface AuthState {
  user: UserProps;
}

export interface AuthContextProps {
  signIn(user: string): Promise<void>;
  user: UserProps;
  signOut(): void;
}
