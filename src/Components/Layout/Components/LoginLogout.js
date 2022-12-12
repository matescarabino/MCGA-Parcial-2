import { Link } from 'react-router-dom'
import { logOutFirebase } from 'redux/auth/thunks';
import { useAuthState } from 'helpers/firebase'
import { useDispatch } from 'react-redux';

export const LoginLogout = () => {
    const { isAuthenticated } = useAuthState()
    const dispatch = useDispatch();

    if (isAuthenticated) {
        return (
            <Link to="/">
                <button onClick={() => dispatch(logOutFirebase())}>Logout</button>
            </Link>
        )
    }
    return (
        <Link to="/login">
            <button>Login</button>
        </Link>
    )
}

