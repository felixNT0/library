import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <div className='nav'>
      <div className='ul'>
        <li>
          <Link className='btn' to='/Home'>
            Home
          </Link>
        </li>
        <li>
          <Link className='btn' to='/AddBook'>
            Add Book
          </Link>
        </li>
        <li>
          <Link className='btn' to='/RemoveBook'>
            Borrow Book
          </Link>
        </li>
        <li>
          <Link className='btn' to='/Library'>
            Library
          </Link>
        </li>
      </div>
    </div>
  )
}

export default NavBar
