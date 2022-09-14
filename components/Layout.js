import Head from "next/head";
import Header from "./Header";
import { Footer } from "./Footer";
import styles from '../styles/Header.module.css'

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title> Random Bullshit Shop - {page} </title>
      </Head>
      <Header />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
