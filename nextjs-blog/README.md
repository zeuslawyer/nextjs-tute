# `NextJs Tutorial`

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

It uses CSS Modules. Global app-level css can also [be added](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css).

Run `yarn dev` from the `/nextjs-blog` directory.

### `Refresher notes`

1. all pages must be default unnamed exports

2. all pages are in the `/page` folder but accessed from the application root directly. So the page at `/pages/a-page` is simply accessed as `/a-page` from the application using client-side routing

3. same goes for static assets and files in `/public`. Also this is the only dir that cannot be renamed. Details on Static File Serving are [here](https://nextjs.org/docs/basic-features/static-file-serving).

4. you (generally?) apply jsx `className` attributes to the html element directly rather than the abstraction. For example you apply `className`s to `<a>` tags directly rather than Next's `<Link>` tags.

5. to build a component (like a Nav Header) that applies to all pages you build a layout. You create a root level directory called `components`.

6. Date fetching is very specific to Nextjs. See [this](https://nextjs.org/docs/basic-features/data-fetching).

7. there are types of pre rendering : (A) static site generation and (B) server side rendering. The first, SSG, is when the HTML can be built and cached as a static file in something like a CDN. It does not need to be built afresh on each client request - the HTML gets reused. There are two sub-types : content data hydration or path-dependent data hydration. A custom NextJs function exists for each - [see here](https://nextjs.org/docs/basic-features/pages#static-generation-with-data).

    An application can combine SSG and SSR.

8. SSR : The pre-rendering is done server-side, on _each_ request, so this is slower. The HTML gets pre-rendered after the server does the computation.

9. If you dont want to use pre-rendering stick to the usual client-side rendering, where parts of the page (the static HTML bit) gets pre-rendered, and then when the page loads, the client side JS makes network calls to hydrate the data. Next JS has a specific (optional) hook for client side rendering - [called SWR](https://swr.vercel.app/).

## `DOCKER`

The `Dockerfile` is in `/nextjs-blog`.

Run `docker build -t zeuslawyer/nextjs-tute:0.<0> .` from inside `/nextjs-blog`

Then run `docker run -p 3000:3000 <image id>`
