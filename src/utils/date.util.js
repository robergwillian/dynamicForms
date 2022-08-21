export const formatDate = (date) => {
  const formatedDate = new Date(date);
  let day = formatedDate.getDate();
  let month = formatedDate.getMonth();
  const year = formatedDate.getFullYear();

  if (day < 10) {
    day = `0${day}`;
  }

  if (month < 10) {
    month = `0${month}`;
  }

  return `${year}-${month}-${day}`;
};
