import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import Dropdown from "../form-elements/select/select.component";
import TextField from "../form-elements/textfield/textfield.component";
import { FIELD_TYPES, FIELD_TYPES_VARIANTS } from "./form-builder.constants";
import PropTypes from "prop-types";
import { styles } from "./form-builder.styles";

const FormBuilder = ({ formName, fields, values }) => {
  const getFieldValue = (id) => {
    const fieldData = values?.data?.filter((field) => field.fieldId === id);
    return String(fieldData[0]?.value);
  };

  const renderFields = fields?.map((field) => {
    if (
      field.type === FIELD_TYPES.TEXT ||
      field.type === FIELD_TYPES.NUMBER ||
      field.type === FIELD_TYPES.DATE
    ) {
      return (
        <TextField
          key={field.id}
          value={getFieldValue(field.id)}
          name={field.name}
          type={field.type}
          variant={FIELD_TYPES_VARIANTS.OUTLINED}
        />
      );
    }

    if (field.type === FIELD_TYPES.SELECT) {
      return (
        <Dropdown
          key={field.id}
          name={field.name}
          type={field.type}
          value={getFieldValue(field.id)}
          options={field.options}
        />
      );
    }
  });

  return (
    <>
      <Typography sx={styles.formTitle}>{formName}</Typography>
      <Box sx={styles.elementsWrapper}>
        {fields ? (
          renderFields
        ) : (
          <Typography sx={styles.formTitle}>No field was found</Typography>
        )}
      </Box>
      <Button variant={FIELD_TYPES_VARIANTS.OUTLINED}>Save</Button>
    </>
  );
};

FormBuilder.propTypes = {
  formName: PropTypes.string,
  fields: PropTypes.array,
  values: PropTypes.object,
};

export default FormBuilder;
