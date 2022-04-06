import React from "react"
import { useState, useEffect } from "react"
import "./Form.css"
// import axios from 'axios'

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("books")
  if (data) {
    // return JSON.parse(data)
  } else {
    return []
  }
  return []
}

function AddBook() {
  //const URL = "  http://localhost:8000/books"
  const [add, setAdd] = useState(false)
  const [value, setValue] = useState({
    title: "",
    author: "",
  })

  const handleChange = (event) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let books = getDataFromLocalStorage()
    books.push(value)

    console.log(value)
    console.log(books)

    localStorage.setItem("books", JSON.stringify(books))
    setValue({
      title: "",
      author: "",
    })
    setAdd("You have just successfully borrow a book from the library")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='card'>
          <h3>Add book to Library</h3>
          <p>{add}</p>
          <input
            type='text'
            placeholder='Book Title'
            onChange={handleChange}
            name='title'
            // value={data}
          />
          <input
            type='text'
            placeholder='Book Autor'
            onChange={handleChange}
            name='author'
            //  value={data}
          />
          <button className='submit' type='submit'>
            Add More Books
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddBook
