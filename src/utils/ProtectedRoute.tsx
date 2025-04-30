// components/ProtectedRoute.tsx
import { RedirectToSignIn, useUser } from "@clerk/clerk-react";
import { ReactNode } from "react";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isLoaded, isSignedIn } = useUser();
    // const location = useLocation();

    if (!isLoaded) return null;

    if (!isSignedIn) {
        return <RedirectToSignIn redirectUrl={'https://dailybazaar24.netlify.app/'} />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;

