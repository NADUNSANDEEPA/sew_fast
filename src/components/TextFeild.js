import * as React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { FormControl, FormHelperText } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const TextFieldComp = styled(TextField)(() => ({
    backgroundColor: 'rgba(252, 249, 249, 0.4)',
    borderRadius: '8px',
    '& .MuiOutlinedInput-root': {
        '& input': {
            fontSize: '17px',
            fontWeight: '500',
        },
        '& fieldset': {
            border: 'none',
            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
        },
        '&:hover fieldset': {
            borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
        },
        '&.Mui-focused fieldset': {
            borderBottom: '1px solid #000000',
        },
    },
    '& .MuiInputLabel-root': {
        fontSize: '17px',
        color: 'rgba(0, 0, 0, 0.5)',
        '&.Mui-focused, &.MuiInputLabel-shrink': {
            fontSize: '19px',
            color: 'rgba(0, 0, 0, 0.9)',
        },
    },
}));


export default function TxtField({ label, name, value, onChange, error, helperText, type = 'text' , showPasswordProp = false, onTogglePassword}) {
    return (
        <FormControl error={error} fullWidth sx={{paddingTop:'3px'}}>
            <TextFieldComp
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                variant="outlined"
                type={showPasswordProp ? 'text' : type}
                InputProps={{
                    endAdornment: (
                        type === 'password' && (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={onTogglePassword}  
                                    edge="end"
                                >
                                    {showPasswordProp ? <VisibilityOff sx={{fontSize:'21px'}} /> : <Visibility sx={{fontSize:'21px'}}/>}
                                </IconButton>
                            </InputAdornment>
                        )
                    ),
                }}
            />
            {helperText && <FormHelperText sx={{fontSize:'13PX'}}>{helperText}</FormHelperText>}
        </FormControl>
    );
}
