// import React, { useState } from "react";

// // import axios from 'axios'

// const getDataFromLocalStorage = () => {
//   const data = localStorage.getItem("books");
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
//   // return []
// };

// function EditBooks() {
//   const [add, setAdd] = useState(false);
//   const [value, setValue] = useState({
//     title: "",
//     author: "",
//     id: "",
//   });

//   const [edit, setEdit] = useState(false);

//   const handleChange = (event) => {
//     setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
//   };

//   const handleSubmit = (e, id) => {
//     e.preventDefault();
//     let books = getDataFromLocalStorage();
//     setEdit(true);
//     if (value.id === id)
//       // console.log(value)
//       // console.log(books)

//       localStorage.setItem("books", JSON.stringify(books));
//     setValue({
//       title: "",
//       author: "",
//       id: "",
//     });
//     setAdd("You have just successfully edit a book from the library");
//   };
//   return (
//     <div>
//       {edit === false && (
//         <form onSubmit={handleSubmit}>
//           <div className="card">
//             <h3>Add book to Library</h3>
//             <p>{add}</p>
//             <input
//               type="text"
//               placeholder="Book Title"
//               onChange={handleChange}
//               name="title"
//               // value={data}
//             />
//             <input
//               type="text"
//               placeholder="Book Autor"
//               onChange={handleChange}
//               name="author"
//               //  value={data}
//             />
//             <input
//               type="number"
//               placeholder="Book Id"
//               onChange={handleChange}
//               id=""
//               //  value={data}
//             />
//             <button className="submit" type="submit">
//               Add More Books
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// }

// export default EditBooks;
