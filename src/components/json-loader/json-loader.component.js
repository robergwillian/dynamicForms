import { Box, Typography } from "@mui/material";
import { Input } from "@mui/material";
import { styles } from "./json-loader.styles";

const JSONLoader = ({ setFormConfig }) => {
  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0]);
    fileReader.onload = (event) => {
      setFormConfig(JSON.parse(event.target.result));
    };
  };

  return (
    <Box sx={styles.loaderWrapper}>
      <Typography>Upload form config file (JSON)</Typography>
      <Input type="file" onChange={(e) => handleChange(e)} />
    </Box>
  );
};

export default JSONLoader;
