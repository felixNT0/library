import { useNavigate, useParams } from "react-router";
import styles from "./BookDetail.module.css";
import { useState, useEffect } from "react";
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage";
import { getBorrowedBooksFromLocalStorage } from "../../service/getBorrowedBooksFromLocalStorage";
import EditBooks from "../../components/EditBooks/EditBook";
import { FaStepBackward, FaRegTrashAlt } from "react-icons/fa";
import NavBar from "../../components/NavBar/NavBar";
import { getCurrentUser } from "../../service/getCurrentUser";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState();
  const [error, setError] = useState(false);

  const currentUser = getCurrentUser();
  const navigate = useNavigate();

  const handleDeleteBook = () => {
    // const books = getBooksFromLocalStorage();
    // const user = currentUser.find((user) => user.username === user.username);
    // console.log(user)
    //   const bookIndex = books.findIndex((book) => book.title === book.title);
    // console.log(bookIndex)
    // books.splice(bookIndex, 1);
    // localStorage.setItem("books", JSON.stringify(books));
    // navigate("/book-list");
  };

  function handleGetBooks() {
    const books = getBooksFromLocalStorage();
    let book = books.find((book) => book.id === id);
    setBook(book);
  }

  const borrowedBooks = getBorrowedBooksFromLocalStorage();

  const handleBorrowBook = () => {
    let currentUser = getCurrentUser();
    let books = getBooksFromLocalStorage();
    // const user = currentUser.find((user) => user.id === id);
    const checkUserIndex = currentUser.findIndex((user) => user.id === id);
    // const book = books.find((book) => book.id === id);
    // const bookIndex = books.findIndex((book) => book.id === id);
    console.log(checkUserIndex);
    // console.log(user);
    // if (!checkUserIndex & user) {
    //   setError("Sorry Login first before you can borrow book");
    //   return;
    // }
    //  console.log(bookIndex);
    // borrowedBooks.push(book);
    // books.splice(bookIndex, 1);
    // localStorage.setItem("borrowBooks", JSON.stringify(borrowedBooks));
    // localStorage.setItem("books", JSON.stringify(books));
    // navigate("/book-list");
  };

  useEffect(() => {
    handleGetBooks();
  }, []);

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{book?.title}</h2>
      <h4 className={styles.author}>{book?.author}</h4>
      <div className={styles.buttons}>
        {currentUser && (
          <button
            className={styles.deleteButton}
            onClick={() => navigate("/book-list")}
          >
            <FaStepBackward />
          </button>
        )}

        <button className={styles.deleteButton} onClick={handleBorrowBook}>
          Borrow Book
        </button>

        <button className={styles.deleteButton} onClick={handleDeleteBook}>
          <FaRegTrashAlt />
        </button>
        <p className={styles.error}>{error}</p>
      </div>{" "}
      {book && <EditBooks book={book} onUpdate={handleGetBooks} />}
    </div>
  );
}
