import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Product.module.css";

const product = ({ product }) => {
  const { description, image, name, price } = product[0];
  return (
    <Layout page={`${name}`}>
      <div className={styles.product}>
        <Image
          layout="responsive"
          width={400}
          height={400}
          src={image.url}
          alt="product image"
        />
        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>{price}EUR</p>
          <form className={styles.form}>
            <label>Quantity</label>
            <select>
                <option value="">-- Select --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <input type="submit" value="Add to Cart" />

            
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlProduct = `${process.env.API_URL}/products?url=${url}`;
  const response = await fetch(urlProduct);
  const product = await response.json();

  console.log(product);

  return {
    props: {
      product,
    },
  };
}

export default product;
