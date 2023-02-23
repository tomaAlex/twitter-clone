import { firebaseAuth } from "@firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const useUser = () => {
	return useAuthState(firebaseAuth);
};
