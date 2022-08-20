export const formatDate = (date) => {
  const dateArray = date.split("/");
  let day = dateArray[0];
  let month = dateArray[1];
  let year = dateArray[2];

  if (day.length === 1) {
    day = `0${day}`;
  }

  if (month.length === 1) {
    month = `0${month}`;
  }

  return `${year}-${month}-${day}`;
};
