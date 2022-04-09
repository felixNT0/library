export const getCurrentUser = () => {
  const data = localStorage.getItem("currentUser");

  if (data) {
    return JSON.parse(data);
  }
  return null;
};
