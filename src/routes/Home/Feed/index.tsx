import Loading from "components/Loading";
import { TweetCreator } from "components/tweets";
import { useUser } from "hooks";
import React from "react";

const Feed = () => {
	const [user, isUserLoading] = useUser();

	if (isUserLoading || !user) {
		return <Loading />;
	}

	return (
		<div>
			<h1>Feed</h1>
			<p>Welcome to Tweeter, {user.displayName}1</p>
			<TweetCreator author={user.uid} />
		</div>
	);
};

export default React.memo(Feed);
