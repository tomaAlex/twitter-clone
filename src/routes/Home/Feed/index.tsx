import Loading from "components/Loading";
import { useUser } from "hooks";
import React from "react";

const Feed = () => {
	const [user, isUserLoading] = useUser();

	if (isUserLoading) {
		return <Loading />;
	}

	return (
		<div>
			<h1>Feed</h1>
			<p>{user?.displayName}</p>
            <p>{user?.email}</p>
			<img src={user?.photoURL as string} />
		</div>
	);
};

export default React.memo(Feed);
