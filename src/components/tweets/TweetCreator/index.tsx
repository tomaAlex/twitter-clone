import { useFirestoreCollection } from "hooks";
import React, { useState } from "react";
import { createAndPostTweet } from "./utils/createAndPostTweet";
import { Tweet } from "types";

type TProps = {
	author: string;
};

const TweetCreator = ({ author }: TProps) => {
	const [, , tweetsCollectionReferece] = useFirestoreCollection<Tweet>("tweets");
	const [content, setContent] = useState("");
	const [postingTweet, setPostingTweet] = useState(false);

	const handleTweetCreation = async () => {
		setPostingTweet(true);
		await createAndPostTweet(author, content, tweetsCollectionReferece);
		setContent("");
		setPostingTweet(false);
	};

	return (
		<div>
			<input type="text" value={content} onChange={(e) => setContent(e.target.value)} disabled={postingTweet} />
			<button onClick={handleTweetCreation} disabled={postingTweet}>
				{postingTweet ? "Posting tweet..." : "Post tweet"}
			</button>
		</div>
	);
};

export default React.memo(TweetCreator);
