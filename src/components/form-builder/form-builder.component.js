import { Button, MenuItem, Select, Typography } from "@mui/material";
import TextField from "../form-elements/textfield/textfield.component";
import { FIELD_TYPES } from "./form-builder.constants";

const FormBuilder = ({ formName, fields, values }) => {
  // console.log({ fields });

  const renderFields = fields.map((field) => {
    console.log({field})
    switch (field.type) {
      case FIELD_TYPES.TEXT || FIELD_TYPES.NUMBER || FIELD_TYPES.DATE:
        <TextField
          key={field.id}
          fieldName={field.name}
          fieldType={field.type}
        />;
      case FIELD_TYPES.SELECT:
        <Select id="105" value={1} label="location">
          <MenuItem value={1}>Boston</MenuItem>
          <MenuItem value={2}>Houston</MenuItem>
          <MenuItem value={3}>New York</MenuItem>
          <MenuItem value={4}>Barcelona</MenuItem>
        </Select>;
      default:
        return "";
    }
  });


  return (
    <>
      <Typography sx={{ m: 4 }}>{formName}</Typography>
      {fields ? (
        renderFields
      ) : (
        <Typography sx={{ m: 4 }}>No field was found</Typography>
      )}
      <Button variant="outlined">Save</Button>
    </>
  );
};

export default FormBuilder;
