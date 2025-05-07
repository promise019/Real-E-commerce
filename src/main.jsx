import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router'
import CartProvider from './context/cartContext.jsx'
import WishlistProvider from './context/wishListContext.jsx'
import SearchProvider from './context/SearchQueryContext.jsx'
import AuthProvider from './context/AuthContext.jsx'
import NavigationTrackProvider from './context/NavigationTrackContecxt.jsx'

createRoot(document.getElementById('root')).render(
<NavigationTrackProvider>
  <AuthProvider>
    <CartProvider>
        <WishlistProvider>
          <SearchProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </SearchProvider>
        </WishlistProvider>
    </CartProvider>
  </AuthProvider>
</NavigationTrackProvider>
)
