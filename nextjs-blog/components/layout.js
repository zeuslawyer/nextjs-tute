import styles from "./layout.module.css";

// CSS modules requires that all css files are colocated and are "*.module.css"
// They also require that the style is passed to the className attribute of the element, not the style attrib

const Layout = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default Layout;
