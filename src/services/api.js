const BASE_URL = process.env.HOST;

export const getFormElements = async () => {
  const response = await fetch(`${BASE_URL}/api/get-form-elements`).then(
    (response) => response.json()
  );
  return response;
};

export const getFormData = async () => {
  const response = await fetch(`${BASE_URL}/api/get-form-data`).then(
    (response) => response.json()
  );
  return response;
};
