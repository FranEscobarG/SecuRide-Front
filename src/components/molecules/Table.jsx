import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'date', label: 'Fecha', minWidth: 130 },
  {
    id: 'velocity',
    label: 'Velocidad (k/h)',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-MX'),
  },
  {
    id: 'distance',
    label: 'Distancia (m)',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-MX'),
  },
  {
    id: 'time',
    label: 'Tiempo (min)',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-MX'),
  },
  {
    id: 'calories',
    label: 'Calorias (kcal)',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-MX'),
  },
];

function createData(date, velocity, distance, time, calories) {
  return { date, velocity, distance, time, calories };
}

const rows = [
  createData('2023-11-19 01:55:53', '23', 13244, 3287, 2000),
  createData('2023-11-19 01:55:53', '54', 14505, 9596, 5000),
  createData('2023-11-19 01:55:53', '12', 483, 301, 2000),
  createData('2023-11-19 01:55:53', '30', 303, 9984, 2200),
  createData('2023-11-19 01:55:53', '22', 470, 7692, 600),
  createData('2023-11-19 01:55:53', '15', 800, 357, 980),
  createData('2023-11-19 01:55:53', '21', 450, 70, 1300),
  createData('2023-11-22 01:55:10', '13', 591, 1972, 2000),
  createData('2023-11-22 01:55:11', '34', 6317, 377, 4000),
  createData('2023-11-22 01:55:12', '41', 6720, 649, 1000),
  createData('2023-11-22 01:55:13', '37', 1794, 17098, 1800),
  createData('2023-11-22 01:55:14', '28', 2067, 928, 985),
  createData('2023-11-22 01:55:15', '16', 247, 8515, 3000),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="table">
        <h5 className='subtitle'>Viajes Recientes</h5>
        <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: '#040629ce', color: '#fff' }}>
        <TableContainer sx={{ maxHeight: 520 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, backgroundColor: '#02031ad1', color: '#fff', fontSize:'1.1rem' , fontWeight:700 }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                        const value = row[column.id];
                        return (
                        <TableCell key={column.id} align={column.align} style={{ color: '#fff', fontSize: '1rem' }}>
                            {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                        );
                    })}
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            style={{ color: '#fff' }}
        />
        </Paper>
    </div>
  );
}