import { Box } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import { styles } from "../../styles/index.styles";
import FormBuilder from "../components/form-builder/form-builder.component";
import { getFormData, getFormElements } from "../services/api";
import { FormContext } from "../context/form-context";
import JSONLoader from "../components/json-loader/json-loader.component";

export default function Home({ formConfigJson, formDataJson }) {
  const [formConfig, setFormConfig] = useState(formConfigJson);
  const [formData, setFormData] = useState(formDataJson);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ event: event.target });
  };

  const handleChange = (id, event) => {
    const [field] = formData?.data.filter((field) => id === field.fieldId);
    if (field) {
      console.log({ ID: field.fieldId });
      console.log({ event: event.target.value });
    }
  };

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

export const getStaticProps = async () => {
  const formConfigJson = await getFormElements();
  const formDataJson = await getFormData();

  return {
    props: {
      formConfigJson,
      formDataJson,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
