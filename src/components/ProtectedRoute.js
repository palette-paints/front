import { Routes, Route, Navigate } from 'react-router-dom';
function ProtectedRoute({ isLoggedIn, component: Component, ...rest }) {
    return (
        <>
            {isLoggedIn ? (
                <Component />
            ) : (
                <Navigate to={{ pathname: '/login' }} />
            )}
        </>
    );
}
export default ProtectedRoute;
