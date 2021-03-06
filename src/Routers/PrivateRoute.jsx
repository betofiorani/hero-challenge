import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoute = ({children}) => {
    
    const auth = useAuth()
    const location = useLocation()
    return auth.isLogged() ? children : <Navigate to = '/login' state={{from: location}} />
}

export default PrivateRoute
