import { format } from "date-fns";
import { saveFormData } from "_services/api";

export const useDynamicForm = (onSuccess) => {
  const handleSubmit = async (data) => {
    const { fieldIds, ...dataSubmitted } = data;

    const newFormData = Object.entries(fieldIds).map(([fieldName, fieldId]) => {
      return {
        fieldId: fieldId,
        value: dataSubmitted[fieldName],
      };
    });
    const currentDate = format(new Date(), "MM/dd/yyyy");

    saveFormData({ dateSaved: currentDate, data: newFormData }).then(
      (response) => {
        alert("Form values saved");
        onSuccess?.(currentDate);
      }
    );
  };

  return { handleSubmit };
};
