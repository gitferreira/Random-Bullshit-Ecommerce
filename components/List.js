import Product from "./Product";
import styles from '../styles/List.module.css'

const List = ({ products }) => {
  return (
    <div className={styles.list}>
      {products.map((product) => {
        return <Product key={product.url} product={product} />;
      })}
    </div>
  );
};

export default List;
