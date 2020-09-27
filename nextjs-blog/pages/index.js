import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

import Layout, { SITE_TITLE } from "../components/layout";
import { getSortedBlogsData } from "../utils/blogs";

// fetch content data for prerendering the static page (SSG with data)
// nextjs requires that this is an async func

/**
 * getStaticProps() must return an object with a props attribute. This props object will get passed to this component.
 * This NextJs function runs only on the server, and it and its contents will never be sent to the browser. So safe for database queries as well.
 * reference: https://nextjs.org/learn/basics/data-fetching/getstaticprops-details
 */
export async function getStaticProps() {
    const blogsData = getSortedBlogsData();
    return {
        props: {
            blogsData,
        },
    };
}

const Home = ({ blogsData }) => {
    return (
        <Layout home>
            <Head>
                <title>{SITE_TITLE}</title>
            </Head>
            {aboutMe()}
            {blogsContents(blogsData)}
        </Layout>
    );
};

/** helper */
function aboutMe() {
    return (
        <section className={utilStyles.headingMd}>
            <p>
                I'm an Australian-Indian, guitar-lovin', philosophy-sippin'
                engineer!
            </p>
            <p>
                This is entirely driven by the tutorial at{" "}
                <a href="https://nextjs.org"> nexjs.org </a>. Except that I have
                also Dockerized it.
            </p>
            Check out a{" "}
            <Link href="/posts/first-post">
                <a>First Post</a>
            </Link>{" "}
            and a{" "}
            <Link href="/posts/dynamic/posts">
                <a>Dynamic Post.</a>
            </Link>
        </section>
    );
}

function blogsContents(data) {
    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {data.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        {title}
                        <br />
                        {id}
                        <br />
                        {date}
                        <hr />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Home;
