import { CollectionReference, DocumentReference } from "firebase/firestore";
import { Tweet } from "types";
import { createTweet } from "./createTweet";
import { postTweet } from "./postTweet";

export const createAndPostTweet = async (
	author: string,
	content: string,
	tweetsCollectionReference: CollectionReference<Tweet>
): Promise<DocumentReference<Tweet>> => {
	const tweet = createTweet(author, content);
	return postTweet(tweet, tweetsCollectionReference);
};
