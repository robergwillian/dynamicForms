import { format, parseISO } from "date-fns";
import { ALERT_SEVERITY } from "_components/toast/toast.constants";
import { useToast } from "_components/toast/toast.hooks";
import { saveFormData } from "_services/api";
import { isValidDate } from "_utils/date.util";

export const useDynamicForm = (onSuccess) => {
  const { setOpen } = useToast();

  const handleSubmit = (data) => {
    const { fieldIds, ...dataSubmitted } = data;

    const newFormData = Object.entries(fieldIds).map(([fieldName, fieldId]) => {
      const value = isValidDate(parseISO(dataSubmitted[fieldName]))
        ? format(parseISO(dataSubmitted[fieldName]), "MM/dd/yyyy")
        : dataSubmitted[fieldName];
      return {
        fieldId: fieldId,
        value,
      };
    });

    const currentDate = format(new Date(), "MM/dd/yyyy");

    saveFormData({ dateSaved: currentDate, data: newFormData })
      .then(() => {
        setOpen(ALERT_SEVERITY.SUCCESS, "Form values saved");
        onSuccess?.(currentDate);
      })
      .catch((error) => {
        setOpen(ALERT_SEVERITY.ERROR, error.message);
      });
  };

  return { handleSubmit };
};
