import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from 'helpers/firebase'

function Header() {
  const { user } = useAuthState()

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.appName}>
          MCGA - Parcial 2
        </div>
        <ul className={styles.rutes}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <h1>Welcome {user?.email}</h1>
        <button onClick={() => signOut(getAuth())}>Sign out</button>
      </nav>
    </header>
  );
}

export default Header;
