import { useNavigate, useParams } from "react-router";
import styles from "./BookDetail.module.css";
import { useState, useEffect } from "react";
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage";
import { getBorrowedBooksFromLocalStorage } from "../../service/getBorrowedBooksFromLocalStorage";
import EditBooks from "../../components/EditBooks/EditBook";
import { FaStepBackward, FaRegTrashAlt } from "react-icons/fa";
import NavBar from "../../components/NavBar/NavBar";
import { getCurrentUser } from "../../service/getCurrentUser";
import { Link } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState();
  // const [error, setError] = useState(false);

  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const navigate = useNavigate();

  const handleDeleteBook = () => {
    const books = getBooksFromLocalStorage() || [];
    const bookIndex = books.findIndex((book) => book.title === book.title);
    console.log(bookIndex);
    books.splice(bookIndex, 1);
    localStorage.setItem("books", JSON.stringify(books));
    navigate("/book-list");
  };

  function handleGetBooks() {
    const books = getBooksFromLocalStorage() || [];
    let book = books.find((book) => book.id === id);
    setBook(book);
  }

  const borrowedBooks = getBorrowedBooksFromLocalStorage() || [];

  const handleBorrowBook = () => {
    let books = getBooksFromLocalStorage() || [];
    const book = books.find((book) => book.id === id);
    const bookIndex = books.findIndex((book) => book.id === id);

    books.splice(bookIndex, 1);
    borrowedBooks.push(book);

    localStorage.setItem("borrowBooks", JSON.stringify(borrowedBooks));
    localStorage.setItem("books", JSON.stringify(books));
    navigate("/book-list");
  };

  useEffect(() => {
    handleGetBooks();
  }, []);

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, [localStorage.getItem("currentUser")]);
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{book?.title}</h2>
      <h4 className={styles.author}>{book?.author}</h4>
      <br />
      {currentUser ? (
        currentUser.type === "user" ? (
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
            {book && <EditBooks book={book} onUpdate={handleGetBooks} />}
          </div>
        ) : (
          <div>
            <p>
              Sorry Create an User Account first before You can be able to see
              Book Details
            </p>
            click
            <Link to="/book-list">BookList</Link>
          </div>
        )
      ) : (
        <div>
          <p>
            Sorry Create an Account first before You can be able to see Book
            Details
          </p>
          click
          <Link to="/book-list">BookList</Link>
        </div>
      )}
    </div>
  );
}
