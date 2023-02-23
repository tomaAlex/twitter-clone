import { firebaseAuth } from "@firebase";
import Loading from "components/Loading";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Authentication = () => {
	const [signInWithGoogle, , loading, error] = useSignInWithGoogle(firebaseAuth);

	if (loading) {
		return <Loading />;
	}

	return (
		<div>
			<h1>Authentication</h1>
			<button onClick={() => signInWithGoogle()}>Login with Google</button>
			<p>{error?.message}</p>
		</div>
	);
};

export default React.memo(Authentication);
