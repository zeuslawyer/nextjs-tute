import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

// CSS modules requires that all css files are colocated and are "*.module.css"
// They also require that the style is passed to the className attribute of the element, not the style attrib
const NAME = "Zubin Pratap";
export const SITE_TITLE = "My Next.js Sample Website";

/**
 * prop.home is a boolean that drives rendering logic for this Layout file
 * Layout is also the files that wraps the contents of  pages - all components that need to have common elements end up being
 * children of Layout.  In this case Layout contains a header, and a conditionally rendered footer returning HOME.
 * All other pages get rendered as children
 */
const Layout = ({ children, home }) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        SITE_TITLE
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={SITE_TITLE} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/profile.jpg"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={NAME}
                        />
                        <h1 className={utilStyles.heading2Xl}>{NAME}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <img
                                    src="/images/profile.jpg"
                                    className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                                    alt={NAME}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>
                                    {NAME}
                                </a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a> ← Back Home </a>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Layout;
