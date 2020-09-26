// Nextjs pages must be default unnamed exported

import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/layout";

const Dynamic = ({ data, type }) => {
    const POST_TITLE = "Dynamic Data";
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>{POST_TITLE}</h1>
            {showData(data, type)}
            <h3>
                Head back{" "}
                <Link href="/">
                    <a>Home.</a>
                </Link>
            </h3>
        </Layout>
    );
};

// This gets called on every request, as its SSR
export async function getServerSideProps(context) {
    const { type } = context.query;
    const URL = `https://jsonplaceholder.typicode.com/${type}`;
    const fetched = await fetch(URL);
    const data = await fetched.json();

    return {
        props: {
            data,
            type,
        },
    };
}

function showData(data, type) {
    if (data.length === 0) {
        return <h4> No Data. </h4>;
    } else {
        return (
            <ol>
                {data.map((item, i) => {
                    return (
                        <li key={i}>
                            Data type: {type}.{" "}
                            {item.name
                                ? item.name
                                : "No Name, but the id is: " + item.id}
                            .
                        </li>
                    );
                })}
            </ol>
        );
    }
}

export default Dynamic;
