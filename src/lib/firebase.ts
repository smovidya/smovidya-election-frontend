import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import Cookies from "js-cookie";

const firebaseConfig = {
	apiKey: "AIzaSyB_G0NVd4UrOWV3xXesJklV5qqKDkaIASQ",
	authDomain: "smovidyaelection-c8938.firebaseapp.com",
	projectId: "smovidyaelection-c8938",
	storageBucket: "smovidyaelection-c8938.firebasestorage.app",
	messagingSenderId: "120194991470",
	appId: "1:120194991470:web:fbcf31463f3d7ab890ad7f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
	console.log("Sign-in clicked");

	return signInWithPopup(auth, provider)
		.then(async (result) => {
			const user = result.user;
			const token = await user.getIdToken();

			// 🍪 Save token to cookie (you can name it whatever)
			Cookies.set("token", token, { expires: 7 }); // expires in 7 days

			// 🔁 Redirect to dashboard
			window.location.href = "/election";
		})
		.catch((error) => {
			console.error("Error signing in:", error);
		});
};
