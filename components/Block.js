
import styles from '../styles/Block.module.css'

const Block = ({blocks}) => {
    const {Heading, Content, Image} = blocks
  return (
    <section> 
<div className={`contenedor ${styles.grid}`}>
   
    <div className={styles.contenido}>
        <h2 className='heading'>{Heading}</h2>
        <p className={styles.text}>{Content}</p>
    </div>
</div>
<style jsx>{
  `
  section {
    padding: 10rem 0;
    margin-top: 10rem;
    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${ Image.url});
    background-size: cover;
    background-position: 50%;
  }
  `
}

</style >

    </section>
  )
}

export default Block