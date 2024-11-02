import { Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box'
export const MainPage = () => {
	return (
			<Box display="flex" alignItems="center" sx={{ height: 'calc(100vh - 80px - 32px)' }} justifyContent="center">
				<Typography variant='h3' color="#4F4F4F" fontSize='14px'>
					Добро пожаловать
				</Typography>
			</Box>
	);
};

export default MainPage;