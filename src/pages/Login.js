import * as React from 'react';
import { Box, FormControl } from '@mui/material';
import { useState } from 'react';
import ButtonComp from '../components/Button';
import TxtField from '../components/TextFeild';
import DataForm from '../components/Form';
import FormTitle from '../components/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Swal from 'sweetalert2'; 

export default function Home({navigation}) {
    const [formData, setFormData] = useState({
        empId: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};
        if (!formData.empId) newErrors.empId = 'Employee id is required';
        if (!formData.password) newErrors.password = 'Password is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            if (formData.empId == "nadun" && formData.password === "123") {
                Swal.fire({
                    title: 'Success!',
                    text: 'You are logged successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigation.navigate('Dashboard'); 
                    }
                });

            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Login was not successful. Try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);  
    };

    return (
        <Box sx={{ padding: '5px', display: 'flex', flexDirection: 'column', gap: '15px' }} >
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10%',
                }}
            >
                <img
                    src={'/logo2.png'}
                    alt="Logo"
                    style={{ width: '200px', height: 'auto' }}
                />
            </Box>

            <DataForm onSubmit={handleSubmit}>
                <FormTitle>LOGIN</FormTitle>

                <FormControl error={!!errors.empId}>
                    <TxtField
                        label="Employee Id"
                        name="empId"
                        value={formData.empId}
                        onChange={handleChange}
                        error={!!errors.empId}
                        helperText={errors.empId}
                    />
                </FormControl>

                <FormControl error={!!errors.password}>
                    <TxtField
                        type="password"
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={!!errors.password}
                        helperText={errors.password}
                        showPasswordProp={showPassword}
                        onTogglePassword={togglePasswordVisibility} 
                    />
                </FormControl>
                <Box sx={{ paddingTop: '30px', margin: '0px' }}>
                    <ButtonComp type="submit" variant='filled' fullWidth="true" icon={<ArrowRightAltIcon sx={{ fontSize: '25px', paddingTop: '4px' }} />} >
                        Login Now
                    </ButtonComp>
                </Box>
            </DataForm>
        </Box>
    );
}
