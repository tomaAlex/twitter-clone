import { CollectionReference, DocumentReference, addDoc } from "firebase/firestore";
import { Tweet } from "types";

export const postTweet = (
	tweet: Tweet,
	tweetsCollectionReference: CollectionReference<Tweet>
): Promise<DocumentReference<Tweet>> => {
	return addDoc(tweetsCollectionReference, tweet);
};
