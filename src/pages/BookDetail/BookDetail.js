import { useNavigate, useParams } from "react-router";
import styles from "./BookDetail.module.css";
import { useState, useEffect } from "react";
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage";
import EditBooks from "../../pages/EditBooks/EditBook";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState();
  // const book = books.find((book) => book.id === id);
  const navigate = useNavigate();

  const handleDeletBook = () => {
    const books = getBooksFromLocalStorage();
    const bookIndex = books.findIndex((book) => book.title === book.title);
    books.splice(bookIndex, 1);
    localStorage.setItem("books", JSON.stringify(books));

    navigate("/book-list");
  };

  function handleGetBooks() {
    const books = getBooksFromLocalStorage();
    let book = books.find((book) => book.id === id);
    console.log(book);
    setBook(book);
  }

  useEffect(() => {
    handleGetBooks();
  }, []);

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
      {book && <EditBooks book={book} onUpdate={handleGetBooks} />}
    </div>
  );
}
