import { Comment } from "types";

export const createComment = (author: string, content: string): Comment => {
	return {
		author,
		content,
		likes: [],
		comments: [],
	};
};
