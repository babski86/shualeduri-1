import styles from "./footer.module.css";
const footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links} aria-label="Footer">
        <a href="mailto:info@example.com">Contact us</a>
        <a href="/privacy-policy">Privacy policy</a>
        <p>Interest based ads</p>
      </nav>
      <p className={styles.copyright}>© 1999, All rights reserved</p>
    </footer>
  );
};
export default footer;
