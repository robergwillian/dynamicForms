import { MenuItem, Select } from "@mui/material";
import { FIELD_TYPES_VARIANTS } from "../../form-builder/form-builder.constants";

const Dropdown = ({ id, name, type, value, options }) => {
  return (
    <>
      <Select
        id={id}
        name={name}
        label={name}
        type={type}
        defaultValue={value}
        variant={FIELD_TYPES_VARIANTS.OUTLINED}
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

export default Dropdown;
