import { useNavigate, useParams } from "react-router";
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage";
import { getBorrowedBooksFromLocalStorage } from "../../service/getBorrowedBooksFromLocalStorage";
import styles from "./ReadBook.module.css";
const ReadBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = getBooksFromLocalStorage();
  const borrowedBooks = getBorrowedBooksFromLocalStorage();
  const book = borrowedBooks.find((book) => book.id === id);
  const bookIndex = borrowedBooks.findIndex((book) => book.id === id);
  const handleReturnBook = () => {
    books.push(book);
    borrowedBooks.splice(bookIndex, 1);
    console.log(books, borrowedBooks);
    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("borrowBooks", JSON.stringify(borrowedBooks));
    navigate("/borrow-book");
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{book.title}</h1>
      <h3 className={styles.author}>{book.author}</h3>

      <button
        onClick={() => {
          navigate("/borrow-book");
        }}
        className={styles.buttonPrev}
      >
        Prev
      </button>
      <button onClick={handleReturnBook} className={styles.buttonReturn}>
        Return Book
      </button>
      <br />
      <div className={styles.nav}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          soluta natus, sint consectetur tempora vitae magni obcaecati non
          tempore, itaque aperiam neque quas laborum provident vero quam?
          Corrupti fugiat quis velit animi non aliquam blanditiis placeat
          explicabo asperiores deserunt ex ea minus, laudantium laborum beatae
          dolore illo cum id a?
        </p>
      </div>

      <div className={styles.nav1}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          soluta natus, sint consectetur tempora vitae magni obcaecati non
          tempore, itaque aperiam neque quas laborum provident vero quam?
          Corrupti fugiat quis velit animi non aliquam blanditiis placeat
          explicabo asperiores deserunt ex ea minus, laudantium laborum beatae
          dolore illo cum id a?
        </p>
      </div>
      <div className={styles.nav2}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          soluta natus, sint consectetur tempora vitae magni obcaecati non
          tempore, itaque aperiam neque quas laborum provident vero quam?
          Corrupti fugiat quis velit animi non aliquam blanditiis placeat
          explicabo asperiores deserunt ex ea minus, laudantium laborum beatae
          dolore illo cum id a?
        </p>
      </div>
    </div>
  );
};

export default ReadBook;
