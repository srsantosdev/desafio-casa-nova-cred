import React, { createContext, useState, useEffect, useContext } from "react";
import { AppLoading } from "expo";
import AsyncStorage from "@react-native-community/async-storage";
import { useMutation, MutationHookOptions } from "@apollo/react-hooks";

import * as auth from "./../services/auth";

interface User {
  nome: string;
  email: string;
  id: Number;
}

interface Credentials {
  username: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn({}: Credentials): Promise<void>;
  signOut(): void;
}

interface MutationResponse {
  data: {
    obterToken: {
      funcionario: {
        nome: string;
        email: string;
        id: string;
      };
      token: string;
    };
  };
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const [mutate] = useMutation<MutationHookOptions>(auth.request);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@RNAuth:user");
      const storagedToken = await AsyncStorage.getItem("@RNAuth:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function signIn({ username, password }: Credentials) {
    if (username && password) {
      const { data } = (await mutate({
        variables: { username, password },
      })) as MutationResponse;

      const user = {
        nome: data.obterToken.funcionario.nome,
        email: data.obterToken.funcionario.email,
        id: Number(data.obterToken.funcionario.id),
      };
      const token = data.obterToken.token;

      if (token) {
        setUser(user);

        await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(user));
        await AsyncStorage.setItem("@RNAuth:token", token);
      }
    }
    return;
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  if (loading) {
    return <AppLoading />;
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export default AuthContext;
