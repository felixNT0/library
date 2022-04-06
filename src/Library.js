import { useEffect, useState } from "react"
import preloader from "./Fountain.gif"
// import Axios from 'axios'
import SearchBar from "./SearchBar"
import "./Library.css"

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("books")
  // console.log(data)
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
  // return []
}

export default function Library() {
  // const URL = "  http://localhost:8000/books"

  // const [books, setBooks] = useState(getDataFromLocalStorage())
  // // const [isPending, setIsPending] = useState(true)

  // const handleGetBooks = (e) => {
  //   e.preventDefault()
  //   let books = getDataFromLocalStorage()

  //   setBooks(books)
  //   // setIsPending(false)
  // }

  const [books, setBooks] = useState(getDataFromLocalStorage())

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    let searched = event.target.value
    let book = getDataFromLocalStorage()
    books.filter((prev) => {
      return prev.title.toLowerCase().includes(searched.toLowerCase())
    })

    // console.log(value)
    // console.log(books).

    localStorage.setItem("books", JSON.stringify(books))

    setBooks(book)
      console.log(book)

    // setAdd("You have just successfully search a book from the library")
  }

  // useEffect(() => {
  //   localStorage.setItem("books", JSON.stringify(books))
  // }, [books])

  return (
    <div>
      <div className='search'>
        <form>
          <div className='card'>
            <h3>Search For Books Here</h3>
            <div className='search'>
              {/* <p>{add}</p> */}
              <input
                type='text'
                // onChange={handleSearchSubmit}
                placeholder='Search'
              />
              <button onClick={handleSearchSubmit} type='submit'>
                <i class='fas fa-search'></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <br />
      {/* <button style={{ marginTop: 20 }} onClick={handleGetBooks}>
        <i class='fa-solid fa-rotate'></i>
      </button> */}
      {/* {isPending && (
        <div>
          <img
            style={{ width: "100px", color: "cadetblue" }}
            src={preloader}
            alt='Preloader'
          />
        </div>
      )} */}

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
                <p>{book.id}</p>
              </div>
            </a>
          </li>
        </ul>
      ))}
    </div>
  )
}
