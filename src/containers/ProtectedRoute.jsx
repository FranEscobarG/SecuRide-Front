import {Outlet, Navigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute() {
    const {isUser, isAuthenticated} = useAuth();

    return (isAuthenticated) ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute;