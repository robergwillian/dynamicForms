import { useContext } from 'react'
import { ToastContext } from './toast.context'

export const useToast = () => {
  const toastContextValue = useContext(ToastContext)
  if (!toastContextValue) return
  const { handleClose, setOpen } = toastContextValue
  return { handleClose, setOpen }
}
