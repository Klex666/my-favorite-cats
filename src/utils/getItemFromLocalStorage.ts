export const getItemFromLocalStorage = () => {
  const data = localStorage.getItem('favorite');
  return data ? JSON.parse(data) : [];
};
