import styles from './home.module.css';

const Home = () => {
  return (
    <section className={styles.container}>
      <h2>
        <a href="https://github.com/matescarabino/MCGA-Parcial-2" target="_blank" rel="noopener noreferrer">
          MCGA - Final
        </a>
      </h2>
      <h3>Collaborators:</h3>
      <div className={styles.collaborators}>
        <div className={styles.collaboratorBlock}>
          <h4>
            <a href="https://github.com/BareaMartin" target="_blank" rel="noopener noreferrer">
              Barea Martin
            </a>
          </h4>
          <img src="https://avatars.githubusercontent.com/u/71444915?v=4" alt="martin" />
        </div>
        <div className={styles.collaboratorBlock}>
          <h4>
            <a href="https://github.com/matescarabino" target="_blank" rel="noopener noreferrer">
              Scarabino Mateo
            </a>
          </h4>
          <img src="https://avatars.githubusercontent.com/u/91098568?v=4" alt="mateo" />
        </div>
        <div className={styles.collaboratorBlock}>
          <h4>
            <a href="https://github.com/ojedamilton" target="_blank" rel="noopener noreferrer">
              Ojeda Milton
            </a>
          </h4>
          <img src="https://avatars.githubusercontent.com/u/93325550?v=4" alt="martin" />
        </div>
      </div>
    </section>
  );
}

export default Home;
