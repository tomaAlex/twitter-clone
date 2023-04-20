import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { fetchUser } from "./fetchUser";

export const useSpecificUser = (
	uid: string
): [specificUser: User | null | undefined, isSpecificUserLoading: boolean, error: Error | undefined] => {
	const [specificUser, setSpecificUser] = useState<User | null | undefined>();
	const [isSpecificUserLoading, setIsSpecificUserLoading] = useState(true);
	const [error, setError] = useState<Error | undefined>();

	const handleUserFetching = async () => {
		try {
			const fetchedUser = await fetchUser(uid);
			setSpecificUser(fetchedUser);
		} catch (error) {
			setSpecificUser(null);
			setError(error as Error);
		} finally {
			setIsSpecificUserLoading(false);
		}
	};

	useEffect(() => {
		handleUserFetching();
	}, []);

	return [specificUser, isSpecificUserLoading, error];
};
