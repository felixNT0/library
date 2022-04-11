import { useNavigate } from "react-router-dom";
import styles from "./BorrowedBookList.module.css";
const BorrowedBookList = (props) => {
  const { title, author, id } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.root} key={id}>
      <div className={styles.list}>
        <p className={styles.borrowedBooks}>
          {title} : {author}
        </p>
        <button
          className={styles.read}
          onClick={() => {
            navigate("/read-book/" + id);
            console.log(id);
          }}
        >
          Read
        </button>
      </div>
    </div>
  );
};

export default BorrowedBookList;
