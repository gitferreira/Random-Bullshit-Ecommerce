import Head from "next/head";
import Header from "./Header";
import { Footer } from "./Footer";
import styles from "../styles/Header.module.css";

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title> Random Bullshit Shop - {page} </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
