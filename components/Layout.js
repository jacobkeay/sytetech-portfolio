import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <meta
        name="description"
        content="Apps, websites, and SEO for small businesses and entrepreneurs."
      />
      <link rel="shortcut icon" href="/logo-dot.png" />
    </Head>
    <Navbar transparent={true} />
    {props.children}
    <div className="m-3 p-3"></div>
  </div>
);

export default Layout;
