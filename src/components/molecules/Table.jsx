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
  createData('India', '23', 1324174, 3287, 2000),
  createData('China', '54', 1403505, 9596, 5000),
  createData('Italy', '12', 60483, 301, 2000),
  createData('United States', '67', 327167, 9830, 1000),
  createData('Canada', '30', 37603, 9984, 2200),
  createData('Australia', '22', 25470, 7692, 600),
  createData('Germany', '15', 83000, 357, 980),
  createData('Ireland', '21', 4850, 70, 1300),
  createData('Mexico', '13', 126591, 1972, 2000),
  createData('Japan', '34', 126317, 377, 4000),
  createData('France', '41', 67020, 649, 1000),
  createData('United Kingdom', '45', 67545, 242, 1400),
  createData('Russia', '37', 146794, 17098, 1800),
  createData('Nigeria', '28', 200967, 928, 985),
  createData('Brazil', '16', 210147, 8515, 3000),
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