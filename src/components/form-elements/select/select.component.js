import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FIELD_TYPES_VARIANTS } from "../../form-builder/form-builder.constants";
import PropTypes from "prop-types";

const Dropdown = ({ name, type, value, options, onChange }) => {
  return (
    <FormControl>
      <InputLabel id={`${name}-label`}>{name}</InputLabel>
      <Select
        labelId={`${name}-label`}
        name={name}
        label={name}
        type={type}
        value={value ? value : ""}
        variant={FIELD_TYPES_VARIANTS.OUTLINED}
        onChange={onChange}
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
