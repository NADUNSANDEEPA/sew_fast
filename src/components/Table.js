import React from 'react';
import {
    TableContainer,
    Table as MUITable,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableFooter,
    Paper,
    TablePagination,
    Box,
    IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function TableHeader({ columns }) {
    return (
        <TableHead sx={{ backgroundColor: '#ABBBA4' }}>
            <TableRow>
                {columns.map((column, index) => (
                    <TableCell key={index} align={column.align || 'center'} sx={{ color: '#3c4d33', fontSize: '16px', fontWeight: '600' }}>
                        {column.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}


function TableBodyComponent({ columns, data, onEdit, onDelete }) {
    return (
        <TableBody>
            {data.map((row, rowIndex) => (
                <TableRow
                    key={rowIndex}
                    sx={{
                        '&:nth-of-type(odd)': { backgroundColor: '#FAFAFA' }, 
                        '&:hover': { backgroundColor: '#FCFCF3' },
                    }}
                >
                    {columns.map((column, colIndex) => (
                        <TableCell key={colIndex} align={column.align || 'center'}>
                            {column.field !== 'action'
                                ? row[column.field]
                                : (
                                    <Box display="flex" alignItems="center">
                                        <IconButton
                                            color="primary"
                                            onClick={() => onEdit(row)}
                                            size="small"
                                            sx={{
                                                marginRight: '8px',
                                                color: 'green',
                                                '&:hover': {
                                                    color: 'darkgreen',
                                                },
                                            }}
                                        >
                                            <EditIcon sx={{ fontSize: '23px' }} />
                                        </IconButton>
                                        <IconButton
                                            color="secondary"
                                            onClick={() => onDelete(row)}
                                            size="small"
                                            sx={{
                                                color: 'red',
                                                '&:hover': {
                                                    color: 'darkred',
                                                },
                                            }}
                                        >
                                            <DeleteIcon sx={{ fontSize: '23px' }} />
                                        </IconButton>
                                    </Box>
                                )}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
    );
}


function TableFooterComponent({ page, rowsPerPage, count, onPageChange, onRowsPerPageChange }) {
    return (
        <TableFooter>
            <TableRow>
                <TablePagination
                    count={count}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    onPageChange={onPageChange}
                    onRowsPerPageChange={onRowsPerPageChange}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </TableRow>
        </TableFooter>
    );
}


function TableComp({ columns, data, page, rowsPerPage, onPageChange, onRowsPerPageChange, onEdit, onDelete }) {
    return (
        <TableContainer component={Paper}>
            <MUITable>
                <TableHeader columns={columns} />
                <TableBodyComponent columns={columns} data={data} onEdit={onEdit} onDelete={onDelete} />
                <TableFooterComponent
                    page={page}
                    rowsPerPage={rowsPerPage}
                    count={data.length}
                    onPageChange={onPageChange}
                    onRowsPerPageChange={onRowsPerPageChange}
                />
            </MUITable>
        </TableContainer>
    );
}

export default TableComp;
