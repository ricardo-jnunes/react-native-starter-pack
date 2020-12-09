import React, {createContext, useState, useEffect, useContext} from 'react';
//import * as SecureStore from 'expo-secure-store';
import * as auth from '../services/auth';
//import api from '../services/api';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = "{\"name\":\"admin\",\"email\":\"admin\"}";//await SecureStore.getItemAsync('_USER');
      const storagedToken = '1234';//await SecureStore.getItemAsync('_TOKEN');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        //api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
      }

      setLoading(false);
    }

    //loadStorageData();
  });

  async function signIn() {
    //const response = await auth.signIn();
    //setUser(response.user);
    //api.defaults.headers.Authorization = `Baerer ${response.token}`;

    //await SecureStore.setItemAsync('_USER', JSON.stringify(response.user));
    //await SecureStore.setItemAsync('_TOKEN', response.token);

    console.log('signIn method');
    setUser({
        name: 'admin',
        email: 'admin@admin.com'
      });
  }

  async function signOut() {
    //await SecureStore.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export {AuthProvider, useAuth};