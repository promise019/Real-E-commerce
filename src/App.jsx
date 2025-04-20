import { Route, Routes } from 'react-router'
import './assets/reusableComponentStyles.css'
import HomePage from './pages/Homepage'
import CartPage from './pages/CartPage'
import WishListPage from './pages/WishlistPage'


function App() {
 return(
  <div className=''>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/cartPage' element={<CartPage/>}/>
      <Route path='/wishlist' element={<WishListPage/>}/>
    </Routes>
  </div>
 )
}

export default App
