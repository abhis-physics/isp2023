import { writable } from 'svelte/store';
import { auth } from '../util/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';

export interface UserData {
    email?: string;
    uid?: string;
    name?: string;
    photoUrl?: string;
    role?: 'admin' | 'subscriber';
}

export const user = writable<User>(null);
export const userData = writable<UserData>(null);

onAuthStateChanged(auth, async (fbUser) => {
    user.set(fbUser);
    if (fbUser) {
        try {
            const authToken = await auth.currentUser?.getIdToken() || ``;
            const payLoad = { uid: `${fbUser.uid}` }
            const options = {
                method: "POST",
                body: JSON.stringify(payLoad),
                headers: {
                    'Content-Type': 'application/json',
                    'authentication': `${authToken}`
                }
            }
            const response = await fetch('https://isp2023-server.vercel.app/user', options);
            if (response.ok) {
                const data = await response.json();
                userData.set(data)
                // console.log("vercel")
            }
        }
        catch (e) {
            console.log(e)
            userData.set(null);
        }
    } else {
        userData.set(null);
    }
});