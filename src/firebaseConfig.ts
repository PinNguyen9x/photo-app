import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

class Firebase {
  private static instance: Firebase;
  public app: any;
  public auth: any;
  public googleAuthProvider: GoogleAuthProvider;

  private constructor() {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    };

    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.googleAuthProvider = new GoogleAuthProvider();
  }

  public static getInstance(): Firebase {
    if (!Firebase.instance) {
      Firebase.instance = new Firebase();
    }
    return Firebase.instance;
  }
}

const firebaseInstance = Firebase.getInstance();
export default firebaseInstance;
