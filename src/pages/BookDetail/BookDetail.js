import { useParams } from "react-router"
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage"
import EditBook from "../EditBooks/EditBook"

export default function BookDetail() {
  const { id } = useParams()
  const books = getBooksFromLocalStorage()
  let bookDetail = books.find((book) => book.id === id)
  console.log(bookDetail)

  console.log(books.id)
  

  return (
    <div>
      <br />

      <h3>Book Title: {bookDetail?.title}</h3>

      <h5>Book Author: {bookDetail?.author}</h5>
      <p>{id}</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
        provident eveniet officia ipsum dolorem sequi neque, iste fuga vero
        explicabo odit, optio soluta blanditiis in.
      </p>
      <hr />
      <EditBook />
    </div>
  )
}
