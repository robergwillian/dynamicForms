import { Snackbar, Stack } from '@mui/material'
import MuiAlert from '@mui/material/Alert'

import { forwardRef } from 'react'
import { AUTO_HIDE_DURATION } from './toast.constants'
import { useToast } from './toast.hooks'

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="outlined" {...props} />
})

export default function Toast({ message, severity, open }) {
  const { handleClose } = useToast()

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={open} autoHideDuration={AUTO_HIDE_DURATION} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  )
}
