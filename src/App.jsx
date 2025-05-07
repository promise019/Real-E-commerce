import { Route, Routes } from 'react-router'
import './assets/reusableComponentStyles.css'
import HomePage from './pages/Homepage'
import CartPage from './pages/CartPage'
import WishListPage from './pages/WishlistPage'
import DetailsPage from './pages/DetailsPage'
import CheckOutPage from './pages/CheckOutPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/about'
import ContactPage from './pages/contact'


function App() {
 return(
  <div>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/cartPage' element={<CartPage/>}/>
      <Route path='/wishlist' element={<WishListPage/>}/>
      <Route path='/detailspage/:id' element={<DetailsPage/>}/>
      <Route path='/checkout' element={<CheckOutPage/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
  </div>
 )
}

export default App
