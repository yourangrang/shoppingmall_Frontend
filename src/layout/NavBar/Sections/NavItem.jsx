import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../store/thunkFunctions';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const routes = [
  { to: '/login', name: '로그인', auth: false},
  { to: '/register', name: '회원가입', auth: false },

  { to: '/product/upload', name: '업로드', auth: true },
  { to: '/user/cart', name: '카트', auth: true, icon: <AiOutlineShoppingCart style={{fontSize: '1.4rem'}} /> } ,

  { to: '', name: '로그아웃', auth: true },
  { to: '/history', name: '주문목록', auth: true },
]

const NavItem = ({ mobile }) => {
  const isAuth = useSelector(state => state.user?.isAuth);
  const cart = useSelector(state => state.user?.userData?.cart);
  const dispatch = useDispatch();
  const navigate  =  useNavigate();
  
  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/login');
  }
  

  return (
    <ul className={`text-md justify-center w-full flex gap-4  items-center ${mobile && "flex-col  bg-[#f0f0f0;]  h-full "} `}>
      {routes.map(({ to, name, auth, icon }) => {
        if (isAuth !== auth) return null; 

        if ( name === '로그아웃') {
          return <li key={name} className='py-2 text-centercursor-pointer'>
            <Link onClick={handleLogout}>{name}</Link>
          </li>
        } else if (icon) {
          return <li className='relative py-2 text-center  cursor-pointer' key={name}>
            <Link to={to}>
              {icon}
              <span className='absolute top-0 inline-flex items-center justify-center w-4 h-4 text-xs font-blod tetx-white
               bg-red-500 border-2 border-black rounded-full -right-1'>
                {cart?.length}
              </span>
            </Link>
          </li>
        } else {
          return <li key={name} className='py-2 text-center  cursor-pointer'>
            <Link to={to}>{name}</Link>
          </li>
        }
      })}
    </ul>
  )
}

export default NavItem