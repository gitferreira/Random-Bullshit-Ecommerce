import Link from 'next/link'
import styles from '../styles/Header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className="contenedor">
            <div>
                <Image width={200} height={200} src="/img/random.png"  alt="logo"/>
            </div>

            <nav>
                <Link href="/">Home</Link>
                <Link href="/aboutUs">About Us</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/shop">Shop</Link>

            </nav>
        </div>
    </header>
  )
}

export default Header