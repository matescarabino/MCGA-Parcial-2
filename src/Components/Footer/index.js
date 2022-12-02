import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.main}>
        <div className={styles.appName}>
          <p>Scarabino</p>
          <a href="https://github.com/matescarabino/MCGA-Parcial-2" target="_blank" rel="noopener noreferrer">
              Visit GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
