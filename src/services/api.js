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

export const saveFormData = async (formData) => {
  try {
    let res = await fetch(`http://localhost:3000/api/get-form-data`, {
      method: "POST",
      body: JSON.stringify(formData),
    });
    console.log({ res });
  } catch (err) {
    console.log(err);
  }
};
