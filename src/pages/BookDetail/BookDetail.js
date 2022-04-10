import { useNavigate, useParams } from "react-router";
import styles from "./BookDetail.module.css";
import { useState, useEffect } from "react";
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage";
import { getBorrowedBooksFromLocalStorage } from "../../service/getBorrowedBooksFromLocalStorage";
import EditBooks from "../../components/EditBooks/EditBook";
import { FaStepBackward, FaRegTrashAlt } from "react-icons/fa";
import NavBar from "../../components/NavBar/NavBar";

export default function BookDetail() {
  const { id } = useParams();

  const [book, setBook] = useState();

  const navigate = useNavigate();

  const handleDeleteBook = () => {
    const books = getBooksFromLocalStorage();
    const bookIndex = books.findIndex((book) => book.title === book.title);
    books.splice(bookIndex, 1);
    localStorage.setItem("books", JSON.stringify(books));
    navigate("/book-list");
  };

  function handleGetBooks() {
    const books = getBooksFromLocalStorage();
    let book = books.find((book) => book.id === id);
    setBook(book);
  }

  const borrowedBooks = getBorrowedBooksFromLocalStorage();
  const handleBorrowBook = () => {
    let books = getBooksFromLocalStorage();
    const book = books.find((book) => book.id === id);
    const bookIndex = books.findIndex((book) => book.id === id);
    console.log(bookIndex);
    borrowedBooks.push(book);
    books.splice(bookIndex, 1);
    localStorage.setItem("borrowBooks", JSON.stringify(borrowedBooks));
    localStorage.setItem("books", JSON.stringify(books));
    navigate("/book-list");
  };

  useEffect(() => {
    handleGetBooks();
  }, []);

  return (
    <div>
      <NavBar/>
      <div className={styles.root}>
        <h2 className={styles.title}>{book?.title}</h2>
        <h4 className={styles.author}>{book?.author}</h4>
        <div className={styles.buttons}>
          <button
            className={styles.deleteButton}
            onClick={() => navigate("/book-list")}
          >
            <FaStepBackward />
          </button>

          <button className={styles.deleteButton} onClick={handleBorrowBook}>
            Borrow Book
          </button>

          <button className={styles.deleteButton} onClick={handleDeleteBook}>
            <FaRegTrashAlt />
          </button>
        </div>{" "}
        {book && <EditBooks book={book} onUpdate={handleGetBooks} />}
      </div>
    </div>
  );
}
