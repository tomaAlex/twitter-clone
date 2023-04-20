import { CollectionReference, DocumentData, collection, getFirestore } from "firebase/firestore";

export const getCollection = <D extends DocumentData>(
	path: string,
	...pathSegments: string[]
): CollectionReference<D> => {
	return collection(getFirestore(), path, ...pathSegments) as CollectionReference<D>;
};
