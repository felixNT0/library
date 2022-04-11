export const getBorrowedBooksFromLocalStorage = () => {
  const data = localStorage.getItem("borrowBooks");

  if (data) {
    return JSON.parse(data);
  }
  return null;
};
