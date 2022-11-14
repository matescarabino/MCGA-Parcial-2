import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
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
      </nav>
    </header>
  );
}

export default Header;
