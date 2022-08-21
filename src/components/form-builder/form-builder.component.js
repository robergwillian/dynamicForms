import { useContext } from "react";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import Dropdown from "../form-elements/select/select.component";
import TextField from "../form-elements/textfield/textfield.component";
import { FIELD_TYPES, FIELD_TYPES_VARIANTS } from "./form-builder.constants";
import PropTypes from "prop-types";
import { styles } from "./form-builder.styles";
import { FormContext } from "../../context/form-context";

const fieldsElements = {
  [`${FIELD_TYPES.TEXT} ${FIELD_TYPES.NUMBER} ${FIELD_TYPES.DATE}`]: ({
    field,
    ...props
  }) => <TextField variant={FIELD_TYPES_VARIANTS.OUTLINED} {...props} />,
  [FIELD_TYPES.SELECT]: ({ field, ...props }) => (
    <Dropdown options={field.options || []} {...props} />
  ),
};

const FormBuilder = ({ formName, fields, values }) => {
  const { handleChange, handleSubmit } = useContext(FormContext);

  const getFieldValue = (id) => {
    const [fieldData] =
      values.data.filter((field) => field.fieldId === id) || [];
    if (fieldData) return String(fieldData.value);
  };

  const renderFields = fields?.map((field) => {
    const fieldType = new RegExp(field.type);
    const getField = Object.keys(fieldsElements).filter((key) =>
      fieldType.test(key)
    );
    return fieldsElements[getField]?.({
      field,
      key: field.id,
      type: field.type,
      name: field.name,
      id: String(field.id),
      value: getFieldValue(field.id),
      onChange: (event) => handleChange(field.id, event),
    });
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
      <Button
        type="submit"
        variant={FIELD_TYPES_VARIANTS.OUTLINED}
        onClick={(event) => handleSubmit(event)}
      >
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
