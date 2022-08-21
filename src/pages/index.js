import { Box, FormControl } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import { styles } from "../../styles/index.styles";
import FormBuilder from "../components/form-builder/form-builder.component";
import { getFormData, getFormElements, saveFormData } from "../services/api";
import { FormContext } from "../context/form-context";
import JSONLoader from "../components/json-loader/json-loader.component";

export default function Home({ formConfigJson, formDataJson }) {
  const [formConfig, setFormConfig] = useState(formConfigJson);
  const [formData, setFormData] = useState(formDataJson);

  const handleSubmit = async (event) => {
    event.preventDefault();
    saveFormData(formData);
  };

  const handleChange = (id, event) => {
    const updatedFormData = formData?.data.map((field) => {
      const { value, fieldId } = field;

      if (id === fieldId) {
        return {
          fieldId: fieldId,
          value: (value = event.target.value),
        };
      }
      return { fieldId: fieldId, value: value };
    });

    const updatedValues = {
      dateSaved: new Date().toString(),
      data: [...updatedFormData],
    };

    setFormData(updatedValues);
  };

  return (
    <Box sx={styles.container}>
      <Head>
        <title>Dynamic forms</title>
      </Head>

      <Box sx={styles.formContainer}>
        <FormContext.Provider value={{ handleChange, handleSubmit }}>
          <FormControl>
            <FormBuilder
              formName={formConfig.formName}
              fields={formConfig.fields}
              values={formData}
            />
          </FormControl>
        </FormContext.Provider>
        <JSONLoader setFormConfig={setFormConfig} />
      </Box>
    </Box>
  );
}

export const getServerSideProps = async () => {
  const formConfigJson = await getFormElements();
  const formDataJson = await getFormData();

  return {
    props: {
      formConfigJson,
      formDataJson,
    },
  };
};
