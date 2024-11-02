import * as React from 'react';
import DataGridDemo from '../components/Table/DataGridDemo.tsx';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { SvgIcon, Typography } from '@mui/material';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Result() {
	const [rows, setRows] = useState ([
		{ id: 1, name: 'Snow12', language: 'Python', numberForks: 14, numberStars: 10, dateUpdate: 220203 },
		{ id: 2, name: 'Lannister', language: 'Cersei', numberForks: 31, numberStars: 10, dateUpdate: 220203 },
		{ id: 3, name: 'Lannister', language: 'Jaime', numberForks: 31, numberStars: 10, dateUpdate: 220203 },
		{ id: 4, name: 'Stark', language: 'Arya', numberForks: 11, numberStars: 10, dateUpdate: 220203 },
		{ id: 5, name: 'Targaryen', language: 'Daenerys', numberForks: null, numberStars: 10, dateUpdate: 220203 },
		{ id: 6, name: 'Melisandre', language: null, numberForks: 150, numberStars: 10, dateUpdate: 220203 },
		{ id: 7, name: 'Clifford', language: 'Ferrara', numberForks: 44, numberStars: 10, dateUpdate: 220203 },
		{ id: 8, name: 'Frances', language: 'Rossini', numberForks: 36, numberStars: 10, dateUpdate: 220203 },
		{ id: 9, name: 'Roxie', language: 'Harvey', numberForks: 65, numberStars: 10, dateUpdate: 220203 },
	])
  return (
		<Grid container spacing={0} columns={12}>
			<Grid item xs={8}>
				<Typography variant='h3' p='32px 0 24px 24px'>
					Результаты поиска
				</Typography>
				<DataGridDemo	
					rows={rows}
				/>
			</Grid>
			<Grid item display='flex' bgcolor='#F2F2F2' alignItems='center' justifyContent='center' sx={{ height: 'calc(100vh - 80px - 32px)' }} xs={4}>
				<Typography>
					Выберите репозиторий
				</Typography>
			</Grid>
		</Grid>
  );
}