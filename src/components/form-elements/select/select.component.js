import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FIELD_TYPES_VARIANTS } from "_components/form-builder/form-builder.constants";
import PropTypes from "prop-types";
import { useController, useFormContext } from "react-hook-form";

const Dropdown = ({ name, label, type, options, defaultValue, ...props }) => {
  const { control, register } = useFormContext();
  const {
    field: { ref, onChange, value },
  } = useController({ register, control, name, defaultValue });
  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        ref={ref}
        labelId={`${name}-label`}
        label={label}
        type={type}
        variant={FIELD_TYPES_VARIANTS.OUTLINED}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.name} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default Dropdown;
