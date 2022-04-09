import { useState } from "react";
import styles from "./BookList.module.css";
import SearchBookForm from "../../components/SearchBookForm/SearchBookForm";
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage";
import BookCard from "../../components/BookCard/BookCard";
import NavBar from "../../components/NavBar/NavBar";

export default function BookList() {
  const books = getBooksFromLocalStorage();
  const [searchedBook, setSearchedBook] = useState();

  const handleSearchSubmit = (value) => {
    let search = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchedBook(search);
  };

  return (
    <div>
      <NavBar/>
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
    </div>
  );
}
