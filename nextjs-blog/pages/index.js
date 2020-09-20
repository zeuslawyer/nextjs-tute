import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

import Layout, { SITE_TITLE } from "../components/layout";

const Home = () => {
    return (
        <Layout home>
            <Head>
                <title>{SITE_TITLE}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    I'm an Australian-Indian, guitar-lovin', philosophy-sippin'
                    engineer!
                </p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this on{" "}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>
                    .)
                </p>
                Check out my{" "}
                <Link href="/posts/first-post">
                    <a>First Post</a>
                </Link>
                .
            </section>
        </Layout>
    );
};

export default Home;
