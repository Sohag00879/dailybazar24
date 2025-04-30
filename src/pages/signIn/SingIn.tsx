import { SignIn } from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";

const UserSignIn = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const redirectUrl = searchParams.get("redirect_url") || "/";

    return <SignIn redirectUrl={redirectUrl} />;
};

export default UserSignIn;
