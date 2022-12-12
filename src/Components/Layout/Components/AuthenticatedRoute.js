import { Route, Redirect } from 'react-router-dom'
import { useAuthState } from 'helpers/firebase'

export const AuthenticatedRoute = ({ component: C, ...props }) => {
    const { isAuthenticated } = useAuthState()
    return (
        <Route
            {...props}
            render={routeProps =>
                isAuthenticated ? <C {...routeProps} /> : <Redirect to="/login" />
            }
        />
    )
}
