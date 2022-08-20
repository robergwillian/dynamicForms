import { Box } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import { styles } from "../../styles/index.styles";
import FormBuilder from "../components/form-builder/form-builder.component";
import { getFormData, getFormElements } from "../services/api";
import { FormContext } from "../context/form-context";
import JSONLoader from "../components/json-loader/json-loader.component";

export default function Home() {
  const [formConfig, setFormConfig] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    getFormElements().then((result) => setFormConfig(result));
    getFormData().then((result) => setFormData(result));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ event: event.target });
  };

  const handleChange = (id, event) => {
    const field = formData?.data.filter((field) => id === field.fieldId);
    if (field) {
      console.log({ ID: field[0]?.fieldId });
      console.log({ event: event.target.value });
    }
  };

  console.log({ formConfig: formConfig });
  return (
    <Box sx={styles.container}>
      <Head>
        <title>Dynamic forms</title>
      </Head>

      <Box sx={styles.formContainer}>
        <FormContext.Provider value={{ handleChange, handleSubmit }}>
          <form onSubmit={handleSubmit}>
            <FormBuilder
              formName={formConfig.formName}
              fields={formConfig.fields}
              values={formData}
            />
          </form>
        </FormContext.Provider>
        <JSONLoader setFormConfig={setFormConfig} />
      </Box>
    </Box>
  );
}
