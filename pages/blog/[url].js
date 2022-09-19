import {useRouter} from 'next/router'
import Layout from '../../components/Layout'
import Image from 'next/image'
import {formatDate} from '../../helpers'
import styles from '../../styles/Entry.module.css'

const BlogEntry = ({entry}) => {
    const router = useRouter()
    const {content, image, published_at, heading} = entry
  return (
    <Layout page={heading}> 
    <main className='contenedor'>
        <h1 className='heading'>
            {heading}
        </h1>
        <article className={styles.entry}>
    <Image layout='responsive' width={800} height={600} src= {image.url} alt='image' />
    <div className={styles.contenido}>
        <p className={styles.date}>{formatDate(published_at)}</p>
        <p className={styles.text}>{content}</p>
np
    </div>
        </article>
    </main>
    </Layout>
  )
}

//Next automatically allows you to take the query when dynamic routing
// export async function getServerSideProps({query: {id}}) {

//     const url = `http://localhost:1337/blogs/${id}`;
//     const url = `${process.env.API_URL}/blogs/${id}`;
//     console.log(url)
//     const response = await fetch(url);
//     const entry = await response.json();
//     console.log(entry)

// return {
//     props: {
// entry
//     }
// }
// }


//Compile project before deploying, faster project
export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`
    const response = await fetch(url)
    const entries = await response.json()

    const paths = entries.map(entry => ({
        params: { url: entry.url}
    }))

    return {
        paths,
        //many entries = true, few = false
        fallback: false
    }
}

export async function getStaticProps({params: {url}}) {

    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
    console.log(url)
    const response = await fetch(urlBlog);
    const entry = await response.json();
    console.log(entry)

return {
    props: {
entry : entry[0]
    }
}
}

export default BlogEntry