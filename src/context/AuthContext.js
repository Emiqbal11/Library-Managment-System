
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../lib/firebase';

import { getUserDataById } from "../lib/services";

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentAuth, setCurrentAuth] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(auth) {

    if (auth) {

      setCurrentAuth(auth.multiFactor.user);
      // console.log(auth.multiFactor.user.uid)
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {

    if (currentAuth) {
      getUserDataById(auth.currentUser.uid).then((doc) => {
        setCurrentUser(doc.data());
      });
    } else {
      setCurrentUser(null);
    }
  }, [currentAuth]);

  return (
    <AuthContext.Provider
      value={{
        currentAuth,
        setCurrentAuth,
        currentUser,
        setCurrentUser,
        initializing,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
