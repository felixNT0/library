import React from "react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className='App'>
      <div
        style={{
          marginTop: "150px",
        }}
      >
        <h1>Welcome to Tsowa Ndakolo Felix Library</h1>
        <p>A library where you can borrow books and read and lot more...</p>

        <p>
          Please click <Link to={"/book-list"}>here</Link> to view the library
        </p>
      </div>
    </div>
  )
}

export default Home
