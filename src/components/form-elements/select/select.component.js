import { MenuItem, Select } from "@mui/material";
import { FIELD_TYPES_VARIANTS } from "../../form-builder/form-builder.constants";

const Dropdown = ({ id, name, type, options }) => {
  return (
    <>
      <Select
        id={id}
        name={name}
        label={name}
        type={type}
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
