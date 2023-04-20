import { DocumentData, FirestoreError, QueryDocumentSnapshot } from "firebase/firestore";
import { useFirestoreCollection } from "hooks/useFirestoreCollection";

export const useFirestoreDocument = <D extends DocumentData>(
	collectionId: string,
	documentId: string
): [doucment: QueryDocumentSnapshot<D> | undefined, isDocumentLoading: boolean, error: FirestoreError | undefined] => {
	const [collection, isCollectionLoading, , error] = useFirestoreCollection<D>(collectionId);
	const document = collection?.docs.find((doc) => doc.id === documentId);
	return [document, isCollectionLoading, error];
};
