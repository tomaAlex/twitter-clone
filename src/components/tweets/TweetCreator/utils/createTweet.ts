import { Tweet } from "types";

export const createTweet = (author: string, content: string): Tweet => {
	return {
		author,
		content,
		likes: [],
		comments: [],
	};
};
