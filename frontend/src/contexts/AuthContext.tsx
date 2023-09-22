import { ReactNode, createContext, useState } from 'react';

type AuthContext = {
  auth: { token: string | null };
  setAuth: React.Dispatch<
    React.SetStateAction<{
      token: null;
    }>
  >;
};

export const AuthContext = createContext<AuthContext | null>(null);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState({ token: null });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
