import { Route, Routes } from 'react-router'
import './assets/reusableComponentStyles.css'
import HomePage from './pages/Homepage'
import CartPage from './pages/CartPage'
import WishListPage from './pages/WishlistPage'
import DetailsPage from './pages/DetailsPage'
import CheckOutPage from './pages/CheckOutPage'


function App() {
 return(
  <div className=''>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/cartPage' element={<CartPage/>}/>
      <Route path='/wishlist' element={<WishListPage/>}/>
      <Route path='/detailspage/:id' element={<DetailsPage/>}/>
      <Route path='/checkout/:id' element={<CheckOutPage/>}/>
    </Routes>
  </div>
 )
}

export default App
