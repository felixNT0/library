import React from "react"
import { useState } from "react"
//import Library from "./Library"

function SearchBar({ books }) {
  const [search, setSearch] = useState("")
  const [searchBook, setSearchBook] = useState([])
  const [message, setMessage] = useState("")

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let allBooks = books
    let book = allBooks.filter((prev) =>
      prev.title.toLowerCase(book).includes(searchBook)
    )
    if (books !== book) {
      setMessage("Sorry Books not in the Library")
      return
    }
    setSearchBook(book)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='card'>
          <h3>Search For Books Here</h3>
          <div className='search'>
            <p>{message}</p>
            <input
              type='text'
              onChange={handleChange}
              name='title'
              placeholder='Search'
              value={search}
            />
            <button type='submit'>
              <i class='fas fa-search'></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
