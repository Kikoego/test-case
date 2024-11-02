import React from 'react';
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header'>
			<div className='header-items'>
				<input type="text" className='header-items--input' placeholder='Введите поисковой запрос' />
				<Link to="/search" style={{ textDecoration: 'none' }}>
  				<Button variant="contained" size='large' sx={{ width: '105px'}}>Искать</Button>
				</Link>

			</div>
		</div>
	);
};

export default Header;