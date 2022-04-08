import React, { useState } from "react";
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage";
import styles from './AddBooks.module.css'




function AddBook() {
  const [add, setAdd] = useState(false);
  const [value, setValue] = useState({
    title: "",
    author: "",
   
  });

  const handleChange = (event) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   const books = getBooksFromLocalStorage()
 let addBook = books.push({ ...value, id: Date.now() })
    localStorage.setItem("books", JSON.stringify(books));
    setValue(addBook);
    setAdd("You have just successfully borrow a book from the library");
  };

  return (
    <div>
      <h3 className={styles.h3}>Add book to Library</h3>
      <p>{add}</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.root}>
         
          <input
            className={styles.input}
            type='text'
            placeholder='Book Title'
            onChange={handleChange}
            name='title'
            // value={data}
          />
          <input
            className={styles.input}
            type='text'
            placeholder='Book Autor'
            onChange={handleChange}
            name='author'
            //  value={data}
          />
         
          <button className={styles.button} type='submit'>
            Add More Books
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddBook;
