//Removes page reloading - Same as with React Router but using href instead of to.
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/AboutUs.module.css'
import Layout from "../components/Layout";


const AboutUs = () => {
  return (
    <Layout page="About Us">
      <main className="contenedor">
        <h2 className="heading">About Us</h2>
        <div className={styles.contenido}>
          <Image layout="responsive" width={600} height={450} src='/img/aboutUs.jpg' alt='about us image' />
          <div>
            <p>
              Elit adipisicing dolore sint consequat culpa Lorem pariatur velit
              incididunt. Qui ut est incididunt magna ex sunt fugiat consequat
              fugiat pariatur et exercitation culpa. Irure fugiat Lorem laborum
              mollit consequat sit velit in ipsum mollit quis ex. Et mollit
              fugiat excepteur enim ex. Aliqua nulla in minim sit sunt aliqua
              nisi enim eiusmod sit irure.
            </p>
            <p>
              Elit adipisicing dolore sint consequat culpa Lorem pariatur velit
              incididunt. Qui ut est incididunt magna ex sunt fugiat consequat
              fugiat pariatur et exercitation culpa. Irure fugiat Lorem laborum
              mollit consequat sit velit in ipsum mollit quis ex. Et mollit
              fugiat excepteur enim ex. Aliqua nulla in minim sit sunt aliqua
              nisi enim eiusmod sit irure.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
