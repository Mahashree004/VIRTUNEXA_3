import { auth, provider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  } catch (error) {
    console.error(error);
  }
};

export { signInWithGoogle };
