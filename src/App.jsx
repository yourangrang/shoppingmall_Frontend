import { Outlet, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NavBar from './layout/NavBar/index'
import Footer from './layout/Footer/index'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Layout () {
	return (
		<div className='flex flex-col h-screen justify-between' >

			<ToastContainer
				position='bottom-right'
				theme='light'
				pauseOnHover
				autoClose={3000}
			/>

			<NavBar />
			<main className='mb-auto w-10/12 max-w-4xl mx-auto'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)  
}


function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<LandingPage />} />

				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Route>
		</Routes>
	)
}

export default App
