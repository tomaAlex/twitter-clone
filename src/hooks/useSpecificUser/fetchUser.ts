import { User } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

export const fetchUser = async (uid: string): Promise<User> => {
	const { data: fetchedUser } = await httpsCallable<{ uid: string }, User>(getFunctions(), "getUser")({ uid });
	return fetchedUser;
};
