import { useState } from "react";
import styles from "./BookList.module.css";
import SearchBookForm from "../../components/SearchBookForm/SearchBookForm";
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage";
import BookCard from "../../components/BookCard/BookCard";

export default function BookList() {
  const [books, setBooks] = useState(getBooksFromLocalStorage())
  //const books = getBooksFromLocalStorage();
  const [searchedBook, setSearchedBook] = useState();

  function handleDeleteAllBooks(e) {
    e.preventDefault()
    setBooks([])
  }

  const handleSearchSubmit = (value) => {
    let search = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchedBook(search);
  };

  return (
    <div>
      <SearchBookForm onSearch={handleSearchSubmit} />
      <h1>Books</h1>
      <ul className={styles.list}>
        {searchedBook && !searchedBook.length && (
          <h5>Sorry, book not found!</h5>
        )}
        {(searchedBook ? searchedBook : books).map((book) => (
          <BookCard {...book} key={book.title} />
        ))}
      </ul>
      <hr />
      <button className={styles.btn} onclick={handleDeleteAllBooks}>
        Delete All Books<i class='fa fa-trash' aria-hidden='true'></i>
      </button>
      <br />
    </div>
  )
}
