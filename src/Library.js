import { useEffect, useState } from "react"
import preloader from "./Fountain.gif"
// import Axios from 'axios'
import SearchBar from "./SearchBar"
import "./Library.css"

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("books")
  if (data) {
    // return JSON.parse(data)
  } else {
    return []
  }
  return []
}

export default function Library() {
  // const URL = "  http://localhost:8000/books"

  const [books, setBooks] = useState()
  const [isPending, setIsPending] = useState(true)

  const handleGetBooks = (e) => {
    e.preventDefault()
    let books = getDataFromLocalStorage()
    localStorage.setItem("books", JSON.stringify(books))
    setBooks(books)
    setIsPending(false)
  }

  // useEffect(() => {

  // }, [books])

  return (
    <div>
      <SearchBar books={books} />
      <br />
      <button style={{ marginTop: 20 }} onClick={handleGetBooks}>
        <i class='fa-solid fa-rotate'></i>
      </button>
      {isPending && (
        <div>
          <img
            style={{ width: "100px", color: "cadetblue" }}
            src={preloader}
            alt='Preloader'
          />
        </div>
      )}

      {books.map((book) => (
        <ul key={book.id} className='cards'>
          <li>
            <a href='' className='card'>
              <img
                src='https://macmillan-dam.captureweb.co.uk/cdn/macmillan/previews/439664/d2600cec4c0f09bf8e6187a83a066343/0/14665546cf5662d409143d004ffc0c54/131898933.jpg'
                className='card__image'
                alt=''
              />
              <div className='card__overlay'>
                <div className='card__header'>
                  <svg className='card__arc' xmlns='http://www.w3.org/2000/svg'>
                    <path />
                  </svg>
                  <img
                    className='card__thumb'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglCWa5kuVgNTrXD2NxCFZ82apQ-8UhJMVFg&usqp=CAU'
                    alt=''
                  />
                  <div className='card__header-text'>
                    <h1 className='card__title'>{book.title}</h1>
                    <h3 className='card__title'>{book.author}</h3>
                    <span className='card__status'>Book Info</span>
                  </div>
                </div>
                <p className='card__description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
        </ul>
      ))}
    </div>
  )
}
