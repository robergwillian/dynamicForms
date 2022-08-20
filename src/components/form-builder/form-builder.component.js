import { useContext } from "react";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import Dropdown from "../form-elements/select/select.component";
import TextField from "../form-elements/textfield/textfield.component";
import { FIELD_TYPES, FIELD_TYPES_VARIANTS } from "./form-builder.constants";
import PropTypes from "prop-types";
import { styles } from "./form-builder.styles";
import { FormContext } from "../../context/form-context";

const FormBuilder = ({ formName, fields, values }) => {
  const { handleChange, handleSubmit } = useContext(FormContext);

  const getFieldValue = (id) => {
    const [fieldData] = values?.data.filter((field) => field.fieldId === id);
    if (fieldData) return String(fieldData.value);
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
          id={String(field.id)}
          value={getFieldValue(field.id)}
          name={field.name}
          type={field.type}
          variant={FIELD_TYPES_VARIANTS.OUTLINED}
          onChange={(event) => handleChange(field.id, event)}
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
          value={getFieldValue(field.id)}
          options={field.options}
          onChange={(event) => handleChange(field.id, event)}
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
      <Button type="submit" variant={FIELD_TYPES_VARIANTS.OUTLINED}>
        Save
      </Button>
    </>
  );
};

FormBuilder.propTypes = {
  formName: PropTypes.string,
  fields: PropTypes.array,
  values: PropTypes.object,
};

FormBuilder.defaultProps = {
  values: { data: [] },
};

export default FormBuilder;
