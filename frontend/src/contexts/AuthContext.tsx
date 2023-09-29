import { ReactNode, createContext } from 'react';

type AuthContext = {
  getToken: () => string;
  saveToken: (token: string) => void;
  removeToken: () => void;
};

export const AuthContext = createContext<AuthContext | null>(null);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const saveToken = (token: string) => {
    localStorage.setItem('accessToken', token);
  };

  const getToken = () => {
    return localStorage.getItem('accessToken') || '';
  };

  const removeToken = () => localStorage.removeItem('accessToken');

  return (
    <AuthContext.Provider value={{ saveToken, removeToken, getToken }}>
      {children}
    </AuthContext.Provider>
  );
}
