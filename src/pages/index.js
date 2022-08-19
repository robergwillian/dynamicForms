import { Box } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import Config from "../../src/pages/api/config/config.json";
import FormBuilder from "../components/form-builder/form-builder.component";

export default function Home() {
  const [formConfig, setFormConfig] = useState({});
  const { formName, fields } = Config;

  const getFormElements = async () => {
    const response = await fetch(
      "http://localhost:3000/api/get-form-elements"
    ).then((response) => response.json());
    setFormConfig(response);
  };

  useEffect(() => {
    getFormElements();
  }, []);

  console.log({ formConfig });

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
        <FormBuilder formName={formName} fields={fields} values={0} />
      </Box>
    </Box>
  );
}
