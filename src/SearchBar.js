import React from "react"
import { useState } from "react"
//import Library from "./Library"

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("books")
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
  // return []
}

function SearchBar() {
 // const [add, setAdd] = useState(false)
  // const [value, setValue] = useState({
  //   title: "",
  //   author: "",
  // })

 const [search, setSearch] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    let searched = event.target.value
    let books = getDataFromLocalStorage()
    books.filter((prev) => {
      return prev.title.toLowerCase().includes(searched)
    })

    // console.log(value)
    // console.log(books).

    localStorage.setItem("books", JSON.stringify(books))
    setSearch(books)
   // setAdd("You have just successfully search a book from the library")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='card'>
          <h3>Search For Books Here</h3>
          <div className='search'>
            {/* <p>{add}</p> */}
            <input
              type='text'
              onChange={handleSubmit}
             
              placeholder='Search'
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
