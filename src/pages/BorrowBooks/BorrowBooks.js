import React, { useState } from "react"
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage"
import styles from "./BorrowBooks.module.css"

function BorrowBooks() {
 
const [value, setValue] = useState(getBooksFromLocalStorage())
  function handleSubmit(e){
    e.preventDefault()
    setValue([])
  }

  return (
    <div>
      <h3 className={styles.h3}>Borrow Book from Library</h3>
     
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.root}>
          <input
            className={styles.input}
            type='text'
            placeholder='Book Title'
          
            // name='title'
            // value={data}
          />
          <input
            className={styles.input}
            type='text'
            placeholder='Book Autor'
           
            // name='author'
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

export default BorrowBooks
