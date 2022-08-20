import { MenuItem, Select } from "@mui/material";
import { FIELD_TYPES_VARIANTS } from "../../form-builder/form-builder.constants";
import PropTypes from "prop-types";

const Dropdown = ({ name, type, value, options, onChange }) => {
  return (
    <>
      <Select
        name={name}
        label={name}
        type={type}
        defaultValue={value}
        variant={FIELD_TYPES_VARIANTS.OUTLINED}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.name} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </>
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
