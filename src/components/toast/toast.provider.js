import { useState } from 'react'
import Toast from './toast.component'
import { ToastContext } from './toast.context'
const initialState = {
  severity: 'success',
  message: '',
  open: false,
}

const ToastProvider = ({ children }) => {
  const [toastState, setToastState] = useState(initialState)

  const setOpen = (severity, message) => {
    setToastState({ message, severity, open: true })
  }

  const handleClose = () => {
    setToastState(initialState)
  }

  return (
    <ToastContext.Provider value={{ setOpen, handleClose }}>
      {children}
      <Toast {...toastState} />
    </ToastContext.Provider>
  )
}

export default ToastProvider
