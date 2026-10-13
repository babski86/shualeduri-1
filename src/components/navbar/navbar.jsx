import styles from "./navbar.module.css";
const navbar = () => {
  return (
    <div>
      <nav>
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
