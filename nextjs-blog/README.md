This is a starter template for [Learn Next.js](https://nextjs.org/learn).

This is a [Tutorial from NextJs](https://nextjs.org/learn/basics).
It uses CSS Modules.

### `Refresher notes`

1. all pages must be default unnamed exports

2. all pages are in the `/page` folder but accessed from the application root directly. So the page at `/pages/a-page` is simply accessed as `/a-page` from the application using client-side routing

3. same goes for static assets and files in `/public`. Also this is the only dir that cannot be renamed. Details on Static File Serving are [here](https://nextjs.org/docs/basic-features/static-file-serving)

4. you (generally?) apply jsx `className` attributes to the html element directly rather than the abstraction. For example you apply `className`s to `<a>` tags directly rather than Next's `<Link>` tags.

5. to build a component (like a Nav Header) that applies to all pages you build a layout. You create a root level directory called `components`.

6.
