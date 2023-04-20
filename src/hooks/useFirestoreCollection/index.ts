import { getCollection } from "@firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { CollectionReference, DocumentData, FirestoreError, QuerySnapshot } from "firebase/firestore";
import { Options } from "react-firebase-hooks/firestore/dist/firestore/types";

export const useFirestoreCollection = <D extends DocumentData>(
	path: string,
	options?: Options,
	...pathSegments: string[]
): [
	collection: QuerySnapshot<D> | undefined,
	isCollectionLoading: boolean,
	CollectionReference: CollectionReference<D>,
	error: FirestoreError | undefined
] => {
	const collectionReference = getCollection<D>(path, ...pathSegments);
	const [collection, isCollectionLoading, error] = useCollection<D>(collectionReference, options);
	return [collection, isCollectionLoading, collectionReference, error];
};
