import MuiTextField from "@mui/material/TextField";
import { formatDate } from "_utils/date.util";
import { FIELD_TYPES } from "_components/form-builder/form-builder.constants";
import PropTypes from "prop-types";
import { useController, useFormContext } from "react-hook-form";
import { format } from "date-fns";

const TextField = ({ id, label, name, type, defaultValue, ...props }) => {
  const isDateField = type === FIELD_TYPES.DATE;
  const { control, register } = useFormContext();
  const {
    field: { ref, onChange, value },
  } = useController({
    register,
    control,
    name,
    defaultValue: isDateField ? formatDate(defaultValue) : defaultValue,
  });

  return (
    <MuiTextField
      fullWidth
      value={value}
      ref={ref}
      onChange={onChange}
      id={id}
      name={name}
      label={label}
      type={type}
      {...props}
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
