import "../styles/global.css";

// this component is to load global, app - level CSS in addition to CSS modules
// this App toplevel component is also used to keep state between pages.  see https://nextjs.org/learn/basics/assets-metadata-css/global-styles

const _App = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default _App;
