import styles from "./BorrowBooks.module.css";
import { getBorrowedBooksFromLocalStorage } from "../../service/getBorrowedBooksFromLocalStorage";
import { Navigate, useParams } from "react-router";
import NavBar from "../../components/NavBar/NavBar";
import BorrowedBookList from "../../components/BorrowedBookList/BorrowedBookList";
import { useState } from "react";


function BorrowBooks() {
  const borrowedBooks = getBorrowedBooksFromLocalStorage();
  const [info, setInfo] = useState("");

  return (
    <div>
      <NavBar />
      <div className={styles.root}>
        <h3 className={styles.headerText}>Books Borrowed From The Library</h3>
        <ul>
          {borrowedBooks.map((book) => (
            <BorrowedBookList {...book} key={book.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BorrowBooks;
