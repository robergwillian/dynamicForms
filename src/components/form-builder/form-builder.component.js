import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import Dropdown from "../form-elements/select/select.component";
import TextField from "../form-elements/textfield/textfield.component";
import { FIELD_TYPES, FIELD_TYPES_VARIANTS } from "./form-builder.constants";

const FormBuilder = ({ formName, fields, values }) => {
  // const mapComponent = {
  //   [FIELD_TYPES.TEXT]: {
  //     component: TextField,
  //     itemProps: {
  //       type: FIELD_TYPES.TEXT,
  //     },},
  //     [FIELD_TYPES.NUMBER]: {
  //       component: TextField,
  //       itemProps: {
  //         type: FIELD_TYPES.NUMBER,
  //       },
  //     },
  //     [FIELD_TYPES.DATE]: {
  //       component: TextField,
  //       itemProps: {
  //         type: FIELD_TYPES.DATE,
  //       },
  //     },
  //     [FIELD_TYPES.SELECT]: {
  //       component: TextField,
  //       itemProps: {
  //         type: FIELD_TYPES.SELECT,
  //       },
  //     },
  //   },


  // console.log(mapComponent['text'])
  const renderFields = fields.map((field) => {
    if (
      field.type === FIELD_TYPES.TEXT ||
      field.type === FIELD_TYPES.NUMBER ||
      field.type === FIELD_TYPES.DATE
    ) {
      return (
        <TextField
          key={field.id}
          id={field.id}
          fieldName={field.name}
          fieldType={field.type}
          variant={FIELD_TYPES_VARIANTS.OUTLINED}
        />
      );
    }

    if (field.type === FIELD_TYPES.SELECT) {
      return (
        <Dropdown
          key={field.id}
          id={field.id}
          name={field.name}
          type={field.type}
          options={field.options}
        />
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
