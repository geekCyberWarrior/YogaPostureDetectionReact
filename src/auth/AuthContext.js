import React, { useContext, useState, useEffect, createContext } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "./config";

import { generateUserSlug } from "../utils/generateSlug";

import LoaderScreen from "../components/LoaderScreen";
import { collection, addDoc } from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    const signup = (email, password, fullName) => {
        const slug = generateUserSlug(fullName);
        let promise = new Promise(function (resolve, reject) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (ref) => {
                    try {
                        const docRef = await addDoc(
                            collection(db, "userProfile"),
                            {
                                id: slug,
                                email,
                                fullName,
                            }
                        );
                        console.log("Document written with ID: ", docRef.id);
                        resolve(slug);
                    } catch (e) {
                        console.error("Error adding document: ", e);
                    }
                })
                .catch((error) => reject(error));
        });

        return promise;
    };

    const signin = (email, password) => {
        let promise = new Promise(function (resolve, reject) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    resolve(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    reject(error);
                });
        });

        return promise;
    };

    const signout = () => {
        return auth.signOut();
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log(user);
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [currentUser]);

    const value = {
        currentUser,
        signup,
        signin,
        signout,
    };

    return (
        <AuthContext.Provider value={value}>
            {loading ? <LoaderScreen /> : children}
        </AuthContext.Provider>
    );
}
