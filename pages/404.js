import Layout from "../components/Layout"
import Link from "next/link"
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
  return (
    <Layout>
        <div className={styles.not_found}> 
        <h1 className="heading">Not found</h1>
    <Link href='/'>Home</Link>
        </div>

    </Layout>
  )
}

export default NotFound