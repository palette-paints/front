import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ path, ...props }) {
    const isAuthenticated = false; // 로그인 여부에 따라 true 또는 false 설정
    return isAuthenticated ? (
        <Route path={path} {...props} />
    ) : (
        <Navigate to="/login" />
    );
}

export default ProtectedRoute;
