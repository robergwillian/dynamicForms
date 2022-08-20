import MuiTextField from "@mui/material/TextField";
import { formatDate } from "../../../utils/date.util";
import { FIELD_TYPES } from "../../form-builder/form-builder.constants";

const TextField = ({ id, fieldName, fieldType, value }) => {
  const isDateField = fieldType === FIELD_TYPES.DATE;

  if (isDateField) {
    var date = formatDate(value);
  }

  return (
    <MuiTextField
      id={id}
      name={id}
      label={fieldName}
      type={fieldType}
      defaultValue={isDateField ? date : value}
    />
  );
};

export default TextField;
