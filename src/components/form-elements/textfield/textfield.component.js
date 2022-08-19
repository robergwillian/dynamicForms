import MuiTextField from "@mui/material/TextField";

const TextField = ({ key, fieldName, fieldType }) => {
  console.log({ key, fieldName, fieldType });
  return (
    <MuiTextField id={key} name={key} label={fieldName} type={fieldType} />
  );
};

export default TextField;
