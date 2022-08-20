import MuiTextField from "@mui/material/TextField";
import { formatDate } from "../../../utils/date.util";
import { FIELD_TYPES } from "../../form-builder/form-builder.constants";
import PropTypes from "prop-types";

const TextField = ({ id, name, type, value, onChange }) => {
  const isDateField = type === FIELD_TYPES.DATE;

  if (isDateField) {
    var date = formatDate(value);
  }

  return (
    <MuiTextField
      id={id}
      name={name}
      label={name}
      type={type}
      defaultValue={isDateField ? date : value}
      onChange={onChange}
    />
  );
};

TextField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextField;
