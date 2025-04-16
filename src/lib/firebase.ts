import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import Cookies from "js-cookie";

const firebaseConfig = {
	apiKey: "AIzaSyBX4Y_S9VnqB_MI7uElk40_8xxX6zGojo4",
	authDomain: "smovidya-election.firebaseapp.com",
	projectId: "smovidya-election",
	storageBucket: "smovidya-election.firebasestorage.app",
	messagingSenderId: "376713306726",
	appId: "1:376713306726:web:3480b9c8d8a6b813c7c3a7",
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

			console.log("Signed in:", user);

			// 🔁 Redirect to dashboard
			window.location.href = "/dashboard";
		})
		.catch((error) => {
			console.error("Error signing in:", error);
		});
};
