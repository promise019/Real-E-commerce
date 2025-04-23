import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router'
import CartProvider from './context/cartContext.jsx'
import WishlistProvider from './context/wishListContext.jsx'
import SearchProvider from './context/SearchQueryContext.jsx'
import ProductProvider from './context/productsContext.jsx'

createRoot(document.getElementById('root')).render(
<CartProvider>
  <ProductProvider>
  <WishlistProvider>
  <SearchProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </SearchProvider>
  </WishlistProvider>
  </ProductProvider>
</CartProvider>
)
