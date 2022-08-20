import MuiTextField from "@mui/material/TextField";
import { formatDate } from "../../../utils/date.util";
import { FIELD_TYPES } from "../../form-builder/form-builder.constants";
import PropTypes from "prop-types";

const TextField = ({ name, type, value }) => {
  const isDateField = type === FIELD_TYPES.DATE;

  if (isDateField) {
    var date = formatDate(value);
  }

  return (
    <MuiTextField
      name={name}
      label={name}
      type={type}
      defaultValue={isDateField ? date : value}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default TextField;
