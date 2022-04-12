export const getAdminDataFromLocalStorage = () => {
  const data = localStorage.getItem("admin");

  if (data) {
    return JSON.parse(data);
  }
  return null;
};
