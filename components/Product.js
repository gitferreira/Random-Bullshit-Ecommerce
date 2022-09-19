import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Product.module.css"

const Product = ({product}) => {
    const {description, image, name, price, url} = product
  return (
    <div className={styles.product}>
        <Image layout="responsive" width={400} height={400} src= {image.url} alt='product image'/>
        <div className={styles.contenido}>
            <h3>{name}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>{price}EUR</p>
            <Link href={`/products/${url}`}>
              
              <a className={styles.link}> See more </a>
               </Link>

        </div>
    </div>
  )
}

export default Product