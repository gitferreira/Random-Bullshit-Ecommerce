import Link from 'next/link'
import styles from '../styles/Header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className="contenedor">
           <div className={styles.bar}>
           <Link href="/">
            <a> 
                <Image width={300} height={300} src="/img/logo-random.png"  alt="logo"/>
                </a>
            </Link>

            <nav className={styles.navigation}>
                <Link href="/">Home</Link>
                <Link href="/aboutUs">About Us</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/shop">Shop</Link>

            </nav>
           </div>
        </div>
    </header>
  )
}

export default Header