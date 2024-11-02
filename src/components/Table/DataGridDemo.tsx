import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Result from '../../pages/ResultPage';

interface DataGridDemoProps {
	rows: {
		id: number;
		name: string;
		language: string | null;
		numberForks: number | null;
		numberStars: number;
		dateUpdate: number;
	}[];
}

export default function DataGridDemo({rows} : DataGridDemoProps) {
	const columns: GridColDef<(typeof rows)[number]>[] = [
		//{ field: 'id', headerName: 'ID', width: 90, },
		{
			field: 'name',
			headerName: 'Название',
			width: 150,
			editable: true,
			disableColumnMenu: true,
			sortable: true,
			hideSortIcons: false,
		},
		{
			field: 'language',
			headerName: 'Язык',
			width: 150,
			editable: false,
			sortable: false,
			disableColumnMenu: true,
		},
		{
			field: 'numberForks',
			headerName: 'Число форков',
			type: 'number',
			width: 110,
			editable: false,
			sortable: false,
			disableColumnMenu: true,

		},
		{
			field: 'numberStars',
			headerName: 'Число звёзд',
			description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 160,
			disableColumnMenu: true,

		},
		{
			field: 'dateUpdate',
			headerName: 'Дата обновления',
			description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 160,
			disableColumnMenu: true,
		},
	];

  return (
    <Box sx={{ height: 'calc(100vh - 80px - 32px - 112px)', width: '100%' }}>
      <DataGrid
        rows={rows}
				columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
