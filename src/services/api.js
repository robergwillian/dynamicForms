const BASE_URL = process.env.NEXT_PUBLIC_HOST;

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
    const res = await fetch(`${BASE_URL}/api/get-form-data`, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(formData),
    });
    console.log({ res });
  } catch (err) {
    console.log(err);
  }
};
