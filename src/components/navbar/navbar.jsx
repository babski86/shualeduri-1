import styles from "./navbar.module.css";
import Link from "next/link";

const navbar = () => {
  return (
    <div>
      <nav>
        <Link href="/" className={styles.logo} aria-label="Shoply home">
          <span className={styles.logoMark} aria-hidden="true">
            S
          </span>
          <span>Shoply</span>
        </Link>
        <ul>
          <li>
            <a href="/">products</a>
          </li>
          <li>
            <a href="/about">profile </a>
          </li>
          <li>
            <a href="/contact">cart</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
