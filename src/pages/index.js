import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Config from "../../src/pages/api/config/config.json";
import FormBuilder from "../components/form-builder/form-builder.component";

export default function Home() {
  const { formName, fields } = Config;

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
        <FormBuilder formName={formName} fields={fields} values={0}/>
      </Box>
    </Box>
  );
}
