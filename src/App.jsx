import React from 'react';
import Home from './page/Home';
import Done from './page/Done';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/done' element={<Done />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;