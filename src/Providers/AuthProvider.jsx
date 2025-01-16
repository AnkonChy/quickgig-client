import {
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

// import axios from "axios";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const handleLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const manageProfile = (name, photo_url) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo_url,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      const userInfo = {
        email: currentUser?.email,
      };
      if (currentUser) {
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
        //get token and stor client
      } else {
        //TODO: remove token(if token stored in the client side: local storage, cashing, in memory)
        localStorage.removeItem("access-token");
      }

      //   if (currentUser?.email) {
      //     const user = { email: currentUser.email };
      //     axios
      //       .post(`${import.meta.env.VITE_API_URL}/jwt`, user, {
      //         withCredentials: true,
      //       })
      //       .then((res) => {
      //         console.log("login", res.data);
      //         setLoading(false);
      //       });
      //   } else {
      //     axios
      //       .post(
      //         `${import.meta.env.VITE_API_URL}/logout`,
      //         {},
      //         {
      //           withCredentials: true,
      //         }
      //       )
      //       .then((res) => {
      //         console.log("logout", res.data);
      //         setLoading(false);
      //       });
      //   }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    handleRegister,
    handleLogin,
    signInWithGoogle,
    handleLogout,
    user,
    setUser,
    manageProfile,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
