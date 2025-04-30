// components/ProtectedRoute.tsx
import { RedirectToSignIn, useUser } from "@clerk/clerk-react";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isLoaded, isSignedIn } = useUser();
    const location = useLocation();

    if (!isLoaded) return null;

    if (!isSignedIn) {
        return <RedirectToSignIn redirectUrl={location.pathname} />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;

