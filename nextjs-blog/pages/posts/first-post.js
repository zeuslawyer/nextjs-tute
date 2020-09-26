// Nextjs pages must be default unnamed exported

import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

const Post = ({ users }) => {
    const POST_TITLE = "First Post";
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>{POST_TITLE}</h1>
            <ol>
                {users.map((user, i) => {
                    return (
                        <li key={i}>
                            {user.name}'s email is {user.email}.
                        </li>
                    );
                })}
            </ol>
        </Layout>
    );
};

// This gets called on every request, as its SSR
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    const users = data.slice(0, 5);

    console.log(users);
    // Pass data to the page via props
    return { props: { users } };
}

export default Post;
