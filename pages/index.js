import Head from "next/head";
import Image from "next/image";
import Link from "next/dist/client/link";
import Layout from "../components/Layout";
import List from  "../components/List"
import Block from  "../components/Block"

export default function Home({products, blocks}) {
  return (
    <Layout page ="Home">
<main className="contenedor">
  <h1 className="heading"> Our Products </h1>
  <List products = {products} />
</main>
<Block 
  blocks = {blocks}
/>
    </Layout>
  );
}


export async function getServerSideProps() {
  // const url = `${process.env.API_URL}/products?_sort=created_at:desc`;
  // const response = await fetch(url)
  // const products = await response.json()

  // const url = `${process.env.API_URL}/blocks`;
  // const response = await fetch(url)
  // const blocks = await response.json()


  //MULTIPLE ASYNC CALLS
  const urlProducts = `${process.env.API_URL}/products?_sort=created_at:desc`;
  const urlBlocks = `${process.env.API_URL}/blocks`;

  const [resProducts, resBlocks] = await Promise.all([
    fetch(urlProducts),
    fetch(urlBlocks),
  ])

  const [products, blocks] = await Promise.all([
    resProducts.json(),
    resBlocks.json()
  ])

  return {
    props: {
      //Due to eS6 and object literal enhancement there is no need to specify : products
      products,
      blocks
    }
  }
}