import { Navigate } from 'react-router-dom';

function ProtectedRoute({ component: Component, setLoginStateFalse }) {

    console.log(localStorage.getItem('isLoggedIn'));
    return (
        <>
            {localStorage.getItem('isLoggedIn') === 'true' ? (
                <Component setLoginStateFalse={setLoginStateFalse} />
            ) : (
                <Navigate to={{ pathname: '/login' }} />
            )}
        </>
    );
}
export default ProtectedRoute;
