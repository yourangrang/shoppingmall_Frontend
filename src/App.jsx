import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NavBar from './layout/NavBar/index'
import Footer from './layout/Footer/index'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { authUser } from './store/thunkFunctions'
import ProtectedPage from './pages/ProtectedPage/index'
import ProtectedRoutes from './components/ProtectedRoutes'
import NotAuthRoutes from './components/NotAuthRoutes'
import HistoryPage from './pages/HistoryPage/index'
import CartPage from './pages/CartPage/index'
import DetailProductPage from './pages/DetailProductPage/index'
import UploadProductPage from './pages/UploadProductPage'

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
	
	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.user?.isAuth);
	const { pathname } = useLocation();

	useEffect(()=>{
		if (isAuth) {
			dispatch(authUser());
		}
	},[isAuth, pathname, dispatch ])


	return (
		<Routes>
			<Route path='/' element={<Layout />}>
			
				<Route index element={<LandingPage />} />

				{/* 로그인한 사용자만 갈 수 있는 경로 */}
				<Route element={<ProtectedRoutes isAuth={isAuth} />}>
					<Route path="/protected" element={<ProtectedPage />} />
					<Route path="/product/upload" element={<UploadProductPage />} />
					<Route path="/product/:productId" element={<DetailProductPage />} />
					<Route path="/user/cart" element={<CartPage />} />
					<Route path="/history" element={<HistoryPage />} />
				</Route>

				{/* 로그인한 사용자는 못 가는 경로*/}
				<Route element={<NotAuthRoutes isAuth={isAuth} />}>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
				</Route>

			</Route>
		</Routes>
	)
}

export default App
