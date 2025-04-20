import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router'
import CartProvider from './context/cartContext.jsx'
import WishlistProvider from './context/wishListContext.jsx'

createRoot(document.getElementById('root')).render(
<CartProvider>
  <WishlistProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </WishlistProvider>
</CartProvider>
)
