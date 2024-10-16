import { getAuth } from "firebase/auth";
import { User } from "../app/userSlice";

const userApi = {
  getMe: () => {
    // TODO: Call API to get current user
    return new Promise<User>((resolve, reject) => {
      // reject(new Error('MY CUSTOM ERROR'));
      // return;

      // Wait 500ms --> return result
      setTimeout(() => {
        const auth = getAuth();
        const currentUser = auth.currentUser;
        if (!currentUser) {
          return reject(new Error("No current user found."));
        }

        resolve({
          id: currentUser.uid || "",
          name: currentUser.displayName || "",
          email: currentUser.email || "",
          photoUrl: currentUser.photoURL || " ",
        });
      }, 500);
    });
  },
};

export default userApi;
