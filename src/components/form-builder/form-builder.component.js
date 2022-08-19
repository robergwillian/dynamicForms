import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import { useId } from "react";
import TextField from "../form-elements/textfield/textfield.component";
import { FIELD_TYPES, FIELD_TYPES_VARIANTS } from "./form-builder.constants";

const FormBuilder = ({ formName, fields, values }) => {

  const renderFields = fields.map((field) => {
    if (
      field.type === FIELD_TYPES.TEXT ||
      field.type === FIELD_TYPES.NUMBER ||
      field.type === FIELD_TYPES.DATE
    ) {
      return (
        <TextField
          id={field.id}
          fieldName={field.name}
          fieldType={field.type}
          variant={FIELD_TYPES_VARIANTS.OUTLINED}
        />
      );
    }

    if (field.type === FIELD_TYPES.SELECT) {
      return (
        <Select
          id={field.id}
          name={field.name}
          label={field.name}
          type={field.type}
          variant={FIELD_TYPES_VARIANTS.OUTLINED}
        >
          {field.options.map((option) => (
            <MenuItem key={option.name} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      );
    }
  });

  return (
    <>
      <Typography sx={{ m: 4 }}>{formName}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "50vh",
        }}
      >
        {fields ? (
          renderFields
        ) : (
          <Typography sx={{ m: 4 }}>No field was found</Typography>
        )}
      </Box>
      <Button variant={FIELD_TYPES_VARIANTS.OUTLINED}>Save</Button>
    </>
  );
};

export default FormBuilder;
