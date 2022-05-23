import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Cart from '../containers/Cart'
import Menu from '../containers/Menu'
import '../styles/containers/App.scss'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
