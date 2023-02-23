import Loading from "components/Loading";
import { useUser } from "hooks";
import React from "react";
import Authentication from "./Authentication";
import Feed from "./Feed";

const Home = () => {
    const [user, isUserLoading] = useUser();

    if (isUserLoading) {
        return <Loading />;
    }

	const isUserLoggedIn = !!user;

	return isUserLoggedIn ? <Feed /> : <Authentication />;
};

export default React.memo(Home);
