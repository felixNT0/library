import { useNavigate, useParams } from "react-router";
import styles from "./BookDetail.module.css";
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage";

export default function BookDetail() {
  const { id } = useParams();
  const books = getBooksFromLocalStorage();
  const book = books.find((book) => book.id === id);
  const bookIndex = books.findIndex((book) => book.title === book.title);
  const navigate = useNavigate();
  const handleDeletBook = () => {
    books.splice(bookIndex, 1);
    localStorage.setItem("books", JSON.stringify(books));

    navigate("/book-list");
  };
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{book?.title}</h2>
      <h4 className={styles.author}>{book?.author}</h4>
      <div className={styles.buttons}>
        <button
          className={styles.deleteButton}
          onClick={() => navigate("/book-list")}
        >
          Prev
        </button>
        <button className={styles.deleteButton} onClick={handleDeletBook}>
          DeleteBook
        </button>
      </div>{" "}
    </div>
  );
}
