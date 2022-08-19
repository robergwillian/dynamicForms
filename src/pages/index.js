import { Box } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import FormBuilder from "../components/form-builder/form-builder.component";

export default function Home() {
  const [formConfig, setFormConfig] = useState({});
  const [formData, setFormData] = useState({});

  const getFormElements = async () => {
    const response = await fetch(
      "http://localhost:3000/api/get-form-elements"
    ).then((response) => response.json());
    setFormConfig(response);
  };

  const getFormData = async () => {
    const response = await fetch(
      "http://localhost:3000/api/get-form-data"
    ).then((response) => response.json());
    setFormData(response);
  };

  useEffect(() => {
    getFormElements();
    getFormData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Head>
        <title>Dynamic forms</title>
      </Head>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FormBuilder
          formName={formConfig.formName}
          fields={formConfig.fields}
          values={formData}
        />
      </Box>
    </Box>
  );
}
