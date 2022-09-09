import Head from "next/head";
import Header from "./Header";
import styles from '../styles/Header.module.css'

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title> Random Bullshit Shop - {page} </title>
      </Head>\
      <Header />

      {children}
    </div>
  );
};

export default Layout;
