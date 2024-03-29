import Layout from "../components/Layout";
import Entry from "../components/Entry";
import styles from '../styles/Blog.module.css'

const Blog = ({ entries }) => {
  return (
    <Layout page="Blog">
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.blog}>
          {entries.map((entry) => (
            <Entry
            key={entry.id}
            entry={entry}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  const response = await fetch(url);
  const entries = await response.json();

  return {
    props: {
      entries,
    },
  };
}

export default Blog;
