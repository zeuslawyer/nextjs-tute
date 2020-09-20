// Nextjs pages must be default unnamed exported

import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

const Post = () => {
    const POST_TITLE = "First Post";
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>{POST_TITLE}</h1>
            <h3>
                Head back{" "}
                <Link href="/">
                    <a>Home.</a>
                </Link>
            </h3>
        </Layout>
    );
};

export default Post;
