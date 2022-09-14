import Link from "next/link"
import styles from '../styles/Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navigation}>
                <Link href="/">Home</Link>
                <Link href="/aboutUs">About Us</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/shop">Shop</Link>

            </nav>
            <p className={styles.copyright}>All rights reserved</p>?
        </div>
    </footer>
  )
}
