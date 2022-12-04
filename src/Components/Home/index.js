import styles from './home.module.css';

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <h2>Created by ✒️</h2>
        <div className={styles.collaborators}>
          <div className={styles.collaboratorBlock}>
            <h4>
              <a href="https://github.com/matescarabino" target="_blank" rel="noopener noreferrer">
                Scarabino Mateo
              </a>
              <p>Developer</p>
            </h4>
            <img src="https://avatars.githubusercontent.com/u/91098568?v=4" alt="mateo" />
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <h2>Built with 🛠️</h2>
        <li>JavaScript ES6</li>
        <li>React Js</li>
        <li>Redux</li>
        <li>React Hook Form</li>
        <li>NPM</li>
        <li>Firebase</li>
        <li>Vercel</li>
      </div>
    </section>
  );
}

export default Home;
