import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Box, Divider, Typography, FormControl } from '@mui/material';
import BackgroundMaskComponent from '../../components/BackgroundMask';
import BottomMenu from '../../components/Menu';
import { Card, CardTitle } from '../../components/Card';
import ButtonComp from '../../components/Button';
import TxtField from '../../components/TextFeild';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DataForm from '../../components/Form';
import Alert from '../../components/Alert';

const fieldNames = {
    teamId: "Team ID",
    teamName: "Team Name",
    teamLeader: "Team Leader",
    teamSupervisor: "Team Supervisor",
    teamCapacity: "Team Capacity",
};

const TeamsEdit = ({ route, navigation }) => {
    const initialData = route?.params?.initialData || {}; 

    const [formData, setFormData] = useState({
        teamId: '',
        teamName: '',
        teamLeader: '',
        teamSupervisor: '',
        teamCapacity: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        console.log(initialData);
        if (initialData) {
            setFormData(initialData);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (value) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmitEdit = (e) => {
        e.preventDefault();

        const newErrors = {};

        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = `${fieldNames[key]} is required`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        Alert.confirmation('Update!', 'The team has been updated.')
            .then((result) => {
                if (result.isConfirmed) {
                    Alert.success('Updated!', 'The item has been updated.');
                    navigation.navigate("TeamsView");
                }
            });
    };

    return (
        <Box sx={{ flex: 1 }}>
            <Header />
            <BackgroundMaskComponent>
                <Typography
                    sx={{
                        color: '#B10505',
                        fontSize: '20px',
                        fontWeight: '600',
                        paddingBottom: '10px',
                    }}
                >
                    Production Teams
                </Typography>

                <Divider sx={{ backgroundColor: '#CAD7B3', height: '1px' }} />

                <Card sx={{ marginTop: '5%', paddingBottom: '40%' }}>
                    <CardTitle sx={{ textAlign: "center", textDecoration: "underline" }}>
                        Edit Team
                    </CardTitle>

                    <DataForm onSubmit={handleSubmitEdit} isShadow={false}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
                            <FormControl error={!!errors.teamId} fullWidth>
                                <TxtField
                                    label="Team ID"
                                    name="teamId"
                                    value={formData.teamId}
                                    onChange={handleChange}
                                    error={!!errors.teamId}
                                    helperText={errors.teamId}
                                    disabled // Disable this field if the team ID should not be editable
                                />
                            </FormControl>

                            <FormControl error={!!errors.teamName} fullWidth>
                                <TxtField
                                    label="Team Name"
                                    name="teamName"
                                    value={formData.teamName}
                                    onChange={handleChange}
                                    error={!!errors.teamName}
                                    helperText={errors.teamName}
                                />
                            </FormControl>
                        </Box>

                        <FormControl error={!!errors.teamLeader}>
                            <TxtField
                                label="Team Leader"
                                name="teamLeader"
                                value={formData.teamLeader}
                                onChange={handleChange}
                                error={!!errors.teamLeader}
                                helperText={errors.teamLeader}
                            />
                        </FormControl>

                        <FormControl error={!!errors.teamSupervisor}>
                            <TxtField
                                label="Team Supervisor"
                                name="teamSupervisor"
                                value={formData.teamSupervisor}
                                onChange={handleChange}
                                error={!!errors.teamSupervisor}
                                helperText={errors.teamSupervisor}
                            />
                        </FormControl>

                        <FormControl error={!!errors.teamCapacity}>
                            <TxtField
                                label="Team Capacity"
                                name="teamCapacity"
                                value={formData.teamCapacity}
                                onChange={handleChange}
                                error={!!errors.teamCapacity}
                                helperText={errors.teamCapacity}
                            />
                        </FormControl>
                        <Box sx={{ paddingTop: '30px', margin: '0px' }}>
                            <ButtonComp size='sm' type="submit" variant='filled' fullWidth={true} icon={<ArrowRightAltIcon sx={{ fontSize: '25px', paddingTop: '4px' }} />} >
                                Update Team
                            </ButtonComp>
                        </Box>
                    </DataForm>
                    <Box sx={{ paddingY: '15%' }}>
                        <Typography>&nbsp;</Typography>
                        <Typography>&nbsp;</Typography>
                    </Box>
                </Card>
            </BackgroundMaskComponent>
            <BottomMenu />
        </Box>
    );
};

export default TeamsEdit;
