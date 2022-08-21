import { createContext } from 'react'

const initialContextValue = {
  handleChange: () => {},
  setOpen: () => {},
}

export const ToastContext = createContext(initialContextValue)
