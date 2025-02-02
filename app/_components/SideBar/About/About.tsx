import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <h1>About Flexbox Labs</h1>
        <p>
          <strong>Flexbox Labs</strong> is a visual playground designed to help
          you create layouts using CSS Flexbox. With an intuitive interface and
          real-time previews, it makes experimenting and learning effortless.
        </p>

        <footer>
          <p>
            🌐 Self hosted by{" "}
            <a href="https://github.com/ESHAYAT102">Eshayat</a>
          </p>

          <p>
            Made with ❤️ by{" "}
            <a href="https://github.com/prazzon" target="_blank">
              prazzon
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default About;
