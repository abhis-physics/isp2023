const config = {
    apiKey: "AIzaSyCauY_gWnnjv_M1cepMoI3qZkXXPH2Qrg4",
    authDomain: "isp-2023.firebaseapp.com",
    projectId: "isp-2023",
    storageBucket: "isp-2023.appspot.com",
    messagingSenderId: "220467270561",
    appId: "1:220467270561:web:02b2a4ba8c2d9fe8e1f1e0",
    measurementId: "G-SX9RRMYN1Q"
};

import { toast } from '../stores/toast';
import { modal } from '../stores/modal';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import type { UserCredential } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAnalytics, logEvent } from 'firebase/analytics';
const firebaseApp = initializeApp(config);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

export const anal = initializeAnalytics(firebaseApp);

export function GAPageView() {
    logEvent(anal, 'page_view', {
        page_location: window.location.href,
    });
}

export function GAEvent(name: string, data?: any) {
    logEvent(anal, name, data);
}

export async function signInWithGoogle() {
    const credential = signInWithPopup(auth, new GoogleAuthProvider());
    return loginHandler(credential);
}

export async function firebaseSignOut() {
    await signOut(auth);
    toast.set({
        icon: '👋',
        message: 'Thanks for hanging out, see ya around!',
    });
}

async function loginHandler(promise: Promise<UserCredential>) {
    let res: any, serverError: string;
    try {
        res = await promise;
        modal.set(null);
        toast.set({
            message: 'Logged in',
            type: 'success',
        });
    } catch (err) {
        serverError = err.message;
        console.error(err);
        toast.set({
            message: serverError,
            type: 'error',
        });
    }
    return { res, serverError };
}