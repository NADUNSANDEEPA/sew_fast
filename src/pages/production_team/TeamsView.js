import React, { useState } from 'react';
import Header from '../../components/Header';
import { styled } from '@mui/material/styles';
import { Box, Divider, Typography, Grid } from '@mui/material';
import BackgroundMaskComponent from '../../components/BackgroundMask';
import BottomMenu from '../../components/Menu';
import { Card, CardTitle } from '../../components/Card';
import TableComp from '../../components/Table';
import Alert from '../../components/Alert';
import ButtonComp from '../../components/Button';

const columns = [
    { label: 'ID', field: 'teamId' },
    { label: 'Name', field: 'teamName' },
    { label: 'Capacity', field: 'capacity', align: 'right' },
    { label: 'Action', field: 'action', align: 'right' },
];

const data = [
    { teamId: 'T01', teamName: 'Team Alpha', capacity: 10 },
    { teamId: 'T02', teamName: 'Team Beta', capacity: 8 },
    { teamId: 'T03', teamName: 'Team Gamma', capacity: 12 },
    { teamId: 'T04', teamName: 'Team Delta', capacity: 9 },
    { teamId: 'T05', teamName: 'Team Epsilon', capacity: 11 },
    { teamId: 'T06', teamName: 'Team Zeta', capacity: 7 },
    { teamId: 'T07', teamName: 'Team Eta', capacity: 6 },
    { teamId: 'T08', teamName: 'Team Theta', capacity: 8 },
    { teamId: 'T09', teamName: 'Team Iota', capacity: 10 },
    { teamId: 'T10', teamName: 'Team Kappa', capacity: 5 },
    { teamId: 'T11', teamName: 'Team Lambda', capacity: 14 },
    { teamId: 'T12', teamName: 'Team Mu', capacity: 8 },
    { teamId: 'T13', teamName: 'Team Nu', capacity: 11 },
    { teamId: 'T14', teamName: 'Team Xi', capacity: 9 },
    { teamId: 'T15', teamName: 'Team Omicron', capacity: 13 },
];

const TeamsView = ({navigation }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleEdit = (team) => {
        console.log(team);
        navigation.navigate('TeamsEdit', { initialData: team });
    };

    const handleDelete = (row) => {
        Alert.confirmation('Delete Item', 'Are you sure you want to delete this item?')
            .then((result) => {
                if (result.isConfirmed) {
                    Alert.success('Deleted!', 'The item has been deleted.');
                }
            });
    };

    const handleAddNewTeam = () => {
        navigation.navigate("TeamsAdd");
    }

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
                    <CardTitle sx={{ textAlign: "center", textDecoration: "underline" }} >Production Teams List</CardTitle>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <ButtonComp variant='tblbtn' size='xsm' onClick={handleAddNewTeam}>Add New Team</ButtonComp>
                    </Box>
                    <TableComp
                        columns={columns}
                        data={data}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
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

export default TeamsView;
