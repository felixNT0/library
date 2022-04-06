import React, { useState } from "react";
import "./Form.css";
// import axios from "axios"

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
  // return []
};

function BorrowBooks() {
  //const URL = "  http://localhost:8000/books"
  const [add, setAdd] = useState(false);
  const [value, setValue] = useState({
    title: "",
    author: "",
  });

  const handleChange = (event) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    let books = getDataFromLocalStorage();
    books.splice(value.id, 1);

    // console.log(value)
    // console.log(books)

    localStorage.setItem("books", JSON.stringify(books));
    setValue({
      title: "",
      author: "",
    });
    setAdd("You have just successfully borrow a book from the library");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <h3>Borrow Book From The Library</h3>
          <p>{add}</p>
          <input
            type="text"
            placeholder="Book Title"
            onChange={handleChange}
            name="title"
            //value={value}
          />
          <input
            type="text"
            placeholder="Book Autor"
            onChange={handleChange}
            name="author"
            //  value={value}
          />
          <button className="submit" type="submit">
            Borrow Books
          </button>
        </div>
      </form>
    </div>
  );
}

export default BorrowBooks;
