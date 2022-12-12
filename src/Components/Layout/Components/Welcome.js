import { useAuthState } from 'helpers/firebase'
import styles from '../layout.module.css';

export const Welcome = () => {
    const { user } = useAuthState()
    const { isAuthenticated } = useAuthState()

    if (isAuthenticated) {
        return (
            <h2 className={styles.welcome}>Welcome {user?.email}</h2>
        )
    }
}