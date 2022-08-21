import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { useController, useFormContext } from "react-hook-form";
import { formatISO } from "date-fns";

export default function DatePicker({
  id,
  label,
  name,
  type,
  defaultValue,
  ...props
}) {
  const { control, register } = useFormContext();

  const {
    field: { ref, onChange, value },
  } = useController({
    register,
    control,
    name,
    defaultValue: defaultValue,
  });

  const handleChange = (date) => {
    onChange(formatISO(date));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        inputFormat="MM/dd/yyyy"
        ref={ref}
        label={label}
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
        {...props}
      />
    </LocalizationProvider>
  );
}
