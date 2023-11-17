import styles from './Blog.module.css';

const Blog = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
};

export default Blog;


