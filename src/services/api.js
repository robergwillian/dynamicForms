export const getFormElements = async () => {
  const response = await fetch("api/get-form-elements").then((response) =>
    response.json()
  );
  return response;
};

export const getFormData = async () => {
  const response = await fetch("api/get-form-data").then((response) =>
    response.json()
  );
  return response;
};
