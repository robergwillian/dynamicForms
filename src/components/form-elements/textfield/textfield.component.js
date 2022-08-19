import MuiTextField from "@mui/material/TextField";

const TextField = ({ id, fieldName, fieldType }) => {
  console.log({ id, fieldName, fieldType });
  return (
    <MuiTextField id={id} name={id} label={fieldName} type={fieldType} />
  );
};

export default TextField;
