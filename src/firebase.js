import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_Fy5xWJw4wjHrsm1iDa5rwfYYsWNCq_c",
    authDomain: "erasmus-collab-app.firebaseapp.com",
    projectId: "erasmus-collab-app",
    storageBucket: "erasmus-collab-app.firebasestorage.app",
    messagingSenderId: "623672205285",
    appId: "1:623672205285:web:8118ad670d94448544990c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Sign in anonymously on load
signInAnonymously(auth)
  .then(() => console.log("✅ Firebase: signed in anonymously"))
  .catch((e) => console.error("❌ Firebase auth error:", e));
