import fs from "fs";
import path from "path";
import matter from "gray-matter";

// process.cwd will return project root, so this returns the blogs folder path
const postsDirectory = path.join(process.cwd(), "blogs");

/**
 * Fetch data (including external) to use as hydration data.
 */
export const getSortedBlogsData = () => {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);

    // extract data for each file
    const blogsMetaData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the blogs' metadata section which is in gray matter YAML format
        const matterResult = matter(fileContents);
        console.log("matterresult", matterResult.data);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
    // Sort posts by date ascending
    return blogsMetaData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};
