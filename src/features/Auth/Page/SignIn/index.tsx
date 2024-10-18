import firebaseInstance from "@firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";

const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/photos",
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};
interface SignInProps {}
const SignIn: React.FC<SignInProps> = (props: SignInProps) => {
  return (
    <div>
      <div className="text-center">
        <h2>Login Form</h2>

        <p>or login with social accounts</p>
      </div>

      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebaseInstance.auth}
      />
    </div>
  );
};

export default SignIn;
