import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import Dropdown from "_components/form-elements/select/select.component";
import TextField from "_components/form-elements/textfield/textfield.component";
import { FIELD_TYPES, FIELD_TYPES_VARIANTS } from "./form-builder.constants";
import PropTypes from "prop-types";
import { styles } from "./form-builder.styles";
import { format } from "date-fns";
import { FormProvider, useForm } from "react-hook-form";
import { useDynamicForm } from "hooks/form.hooks";
import { useState } from "react";

const fieldsElements = {
  [`${FIELD_TYPES.TEXT} ${FIELD_TYPES.NUMBER} ${FIELD_TYPES.DATE}`]: ({
    field,
    ...props
  }) => <TextField variant={FIELD_TYPES_VARIANTS.OUTLINED} {...props} />,
  [FIELD_TYPES.SELECT]: ({ field, ...props }) => (
    <Dropdown options={field.options || []} {...props} />
  ),
};

const FormBuilder = ({ formSchema, values }) => {
  const { formName, fields } = formSchema;

  const [dateSaved, setDateSaved] = useState(values.dateSaved);
  const { handleSubmit } = useDynamicForm((date) => setDateSaved(date));
  const lastSaveDate = format(new Date(dateSaved), "MM/dd/yyyy");

  const formMethods = useForm();

  const {
    formState: { isDirty },
  } = formMethods;

  const getFieldValue = (id) => {
    const [fieldData] =
      values.data.filter((field) => field.fieldId === id) || [];
    if (fieldData) return String(fieldData.value);
  };

  const renderFields = fields.map((field) => {
    const fieldType = new RegExp(field.type);
    const getField = Object.keys(fieldsElements).filter((key) =>
      fieldType.test(key)
    );
    formMethods.register(`fieldIds.${field.name}`, { value: field.id });

    return fieldsElements[getField]?.({
      field,
      key: field.id,
      type: field.type,
      name: field.name,
      label: field.name,
      id: String(field.id),
      defaultValue: getFieldValue(field.id),
    });
  });

  return (
    <FormProvider control={formMethods.control}>
      <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
        <Typography sx={styles.formTitle}>{formName}</Typography>
        <Box sx={styles.elementsWrapper}>
          {fields.length > 0 ? (
            renderFields
          ) : (
            <Typography sx={styles.formTitle}>No field was found</Typography>
          )}
        </Box>
        <Button
          disabled={!isDirty}
          type="submit"
          variant={FIELD_TYPES_VARIANTS.OUTLINED}
        >
          Save
        </Button>
        <Typography>Last Saved: {lastSaveDate}</Typography>
      </form>
    </FormProvider>
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
