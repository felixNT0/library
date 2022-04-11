export const getUsersDataFromLocalStorage = () => {
  const data = localStorage.getItem("users");

  if (data) {
    return JSON.parse(data);
  }
  return null;
};
