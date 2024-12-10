import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/authentication";

export interface AuthStateContext {
  email: string | null;
  status: 'checking' | 'authenticated' | 'no-authenticated';
  loginWithCredentials: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const initialState: Pick<AuthStateContext, 'status' | 'email'> = {
  email: null,
  status: 'checking',
}

export const AuthContext = createContext({} as AuthStateContext);

export default function AuthProvider({children}: {children: JSX.Element | JSX.Element[]}) {

  const [session, setSession] = useState(initialState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        setSession({
          status: 'authenticated',
          email: user.email,
        });
      } else {
        setSession({
          status: 'no-authenticated',
          email: null,
        });
      }
    });
    return unsubscribe;
  }, []);

  const loginWithCredentials = async (email: string, password: string) => {
    try {
     const resp = await signInWithEmailAndPassword(auth, email, password);
     setSession({
       status: 'authenticated',
       email: resp.user.email,
     });
    }catch(e){
      setSession({
        status: 'no-authenticated',
        email: null,
      });
      alert((e as Error).message);
    }
  };

  const logout = async () => {
    await auth.signOut();
    setSession({email:null, status: 'no-authenticated'});
  };

  return (
    <AuthContext.Provider value={{...session, loginWithCredentials, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context;
};
