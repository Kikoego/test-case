import { Routes, Route } from 'react-router-dom';
import './components/Header/Header.scss';
import './components/Header/Header.tsx'
import Header from './components/Header/Header.tsx';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { MainPage } from './pages/MainPage.tsx'
import '@fontsource/roboto/400.css';
import ResultPage from './pages/ResultPage.tsx';
import Footer from './components/Footer/Footer.tsx';

const theme = createTheme({
	palette: {
		primary: {
			main: '#2196F3'
		}
	}
})

function App() {
  return (
    <div className="App">
		<ThemeProvider theme={theme}>
			<Header />
		</ThemeProvider>
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/search' element={<ResultPage />} />
		</Routes>
		<Footer />
    </div>
  );
}

export default App;
