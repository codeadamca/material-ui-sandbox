import { Stack, TextField, InputAdornment } from '@mui/material'

import VisibilityIcon from '@mui/icons-material/Visibility';

import { useState } from 'react'

export const MuiTextField = () => {
  const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <TextField label='Name' variant='outlined' />
            <TextField label='Name' variant='filled' />
            <TextField label='Name' variant='standard' />
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Small Secondary' size='small' color='secondary' />
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField 
                label='Form Input' 
                required 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                error={!value}
                helperText={!value ? 'Required' : 'Do no share your password'}
            />
            <TextField 
                type='password'
                label='Form Input' 
                helperText='Do no share your password' 
                disabled
                InputProps={{
                    startAdornment: <InputAdornment position='start'><VisibilityIcon /></InputAdornment>
                }}
            />
            <TextField label='Read Only' InputProps={{readOnly: true}} />
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Amount' size='small' InputProps={{
                startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }} />
            <TextField label='Weight' size='small'InputProps={{
                endAdornment: <InputAdornment position='start'>kg</InputAdornment>
            }} />
        </Stack>
    </Stack>
  )
}
