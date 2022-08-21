import { format } from 'date-fns'
import { saveFormData } from '_services/api'

export const useDynamicForm = () => {
  const handleSubmit = async (data) => {
    const { fieldIds, ...dataSubmitted } = data

    const newFormData = Object.entries(fieldIds).map(([fieldName, fieldId]) => {
      return {
        fieldId: fieldId,
        value: dataSubmitted[fieldName],
      }
    })

    saveFormData({ dateSaved: format(new Date(), 'MM/dd/yyyy'), data: newFormData }).then(() => alert('Form values saved'))
  }

  return { handleSubmit }
}
