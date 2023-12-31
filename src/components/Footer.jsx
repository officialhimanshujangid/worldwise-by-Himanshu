import styles from "./Sidebar.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; copyright {new Date().getFullYear()} by WorldWise By Himanshu
        Inc.
      </p>
    </footer>
  );
}

export default Footer;
