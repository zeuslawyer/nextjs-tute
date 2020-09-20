// Nextjs pages must be default unnamed exported

import Link from "next/link";

export default () => (
    <>
        <h1>This is the FIRST post page</h1>
        <h3>
            Head back{" "}
            <Link href="/">
                <a>Home.</a>
            </Link>
        </h3>
    </>
);
