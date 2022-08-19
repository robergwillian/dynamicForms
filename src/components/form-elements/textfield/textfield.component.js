import MuiTextField from "@mui/material/TextField";

const TextField = ({ id, fieldName, fieldType, value }) => {
  return (
    <MuiTextField
      id={id}
      name={id}
      label={fieldName}
      type={fieldType}
      defaultValue={value}
    />
  );
};

export default TextField;
