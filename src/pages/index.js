import { useState } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import FormBuilder from "_components/form-builder/form-builder.component";
import JSONLoader from "_components/json-loader/json-loader.component";
import { getFormData, getFormElements } from "_services/api";
import { styles } from "_styles/index.styles";
import ToastProvider from "_components/toast/toast.provider";

export default function Home({ formConfigJson, formDataJson }) {
  const [formConfig, setFormConfig] = useState(formConfigJson);

  return (
    <ToastProvider>
      <Box sx={styles.container}>
        <Head>
          <title>Dynamic forms</title>
        </Head>

        <Box sx={styles.formContainer}>
          <FormBuilder formSchema={formConfig} values={formDataJson} />
          <JSONLoader setFormConfig={setFormConfig} />
        </Box>
      </Box>
    </ToastProvider>
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
