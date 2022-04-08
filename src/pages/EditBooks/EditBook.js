import { useParams, useNavigate } from "react-router"
import React, { useState } from "react"
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage"
import styles from "./EditBook.module.css"

export default function EditBook() {
  const { id } = useParams()
  const books = getBooksFromLocalStorage()
  const book = books.find((book) => book.id === id)
  const bookIndex = books.findIndex((book) => book === book.title)
  const navigate = useNavigate()

  const [add, setAdd] = useState(false)
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState({
    title: "",
    author: "",
  })

  const handleChange = (event) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleGoBackToBookList = () => navigate("/book-list")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(book && bookIndex){
const editedBook = books ? JSON.parse(books) : []
let edit = value;
const updated= [...editedBook, edit]
localStorage.set(books, JSON.stringify(updated))
setValue(updated)
    }
       
        //   localStorage.setItem("books", JSON.stringify(books))
     

    setAdd("You have just successfully borrow a book from the library")
  }

  return (
    <div>
      <br />
      <button className={styles.click} onClick={handleGoBackToBookList}>
        <i className='fa fa-arrow-left' aria-hidden='true'></i>Book List Page
      </button><br />
      <button className={styles.click} onClick={() => setEdit(!edit)}>
        Edit Book <i className='fas fa-edit'></i>
      </button>

      {edit && (
        <div>
          <h3 className={styles.h3}>Edit book in Library</h3>
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
                Update the Edited Book
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
