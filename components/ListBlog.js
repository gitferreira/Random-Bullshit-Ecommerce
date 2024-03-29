import Entry from "../components/Entry";
import styles from "../styles/Blog.module.css";

const ListBlog = ({entries}) => {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className={styles.blog}>
        {entries.map((entry) => (
          <Entry key={entry.id} entry={entry} />
        ))}
      </div>
    </>
  );
};

export default ListBlog;
