import {formatDate} from '../helpers'
import styles from '../styles/Entry.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Entry = ({entry}) => {
    const {heading, summary, image, published_at, id } = entry
  return (
    <article>

        <Image layout='responsive' width={800} height={600} src={image.url} alt={`image blog ${heading}`} />
        <div className={styles.contenido}> 
        <h3 className={styles.title}>{heading}</h3>
        <p className={styles.date}>{formatDate(published_at)}</p>
        <p className={styles.summary}>{summary}</p>
        <Link href={`/blog/${id}`}>
            <a className={styles.link}>Read More</a>
        </Link>

        </div>
    </article>
  )
}

export default Entry