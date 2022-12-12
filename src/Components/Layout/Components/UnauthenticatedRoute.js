import { Route, Redirect } from 'react-router-dom'
import { useAuthState } from 'helpers/firebase'

export const UnauthenticatedRoute = ({ component: C, ...props }) => {
    const { isAuthenticated } = useAuthState()
    return (
        <Route
            {...props}
            render={routeProps =>
                !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
            }
        />
    )
};
