import Layout from "../components/Layout"
import List from "../components/List"


const Shop = ({products}) => {
  return (
   <Layout 
   page='Online Shop'
   >
    <main className="contenedor"> 
    <h1 className="heading">Shop</h1>
    <List 
    products={products}
    />
    </main>
   </Layout>
  )
}



export async function getServerSideProps() {
  const url = `${process.env.API_URL}/products?_sort=created_at:desc`;
  const response = await fetch(url)
  const products = await response.json()

  return {
    props: {
      //Due to eS6 and object literal enhancement there is no need to specify : products
      products
    }
  }
}

export default Shop;