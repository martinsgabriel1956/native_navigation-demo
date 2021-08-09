import React, { createContext } from 'react';

type AuthProps = {
  signIn: () => void,
  signOut: () => void,
  signUp: () => void,
}


export const AuthContext = createContext({} as AuthProps);
