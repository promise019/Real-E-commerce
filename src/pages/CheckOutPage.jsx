import { useContext, useEffect, useState } from 'react';
import {cartContext} from '../context/cartContext'
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { NavigationTrackContext } from '../context/NavigationTrackContecxt';

const CheckoutPage = () => {
  const [storedData, setStoredData] = useState(JSON.parse(localStorage.getItem('E-stored-data')) || {})
  const [form, setForm] = useState({
    name: storedData.name,
    email: storedData.email,
    address: storedData.address,
    city: storedData.city,
    zip: storedData.zip,
    cardName: storedData.cardName,
    cardNumber: storedData.cardNumber,
    expiry: storedData.expiry,
    cvv: storedData.cvv
  });

  useEffect(()=>{
    localStorage.setItem('E-stored-data',JSON.stringify(form))
  },[storedData])

  const {cart, dispatch} = useContext(cartContext);
  const {loginData} = useContext(AuthContext);
  const {setPreviousPage} = useContext(NavigationTrackContext);

  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 17.99;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreviousPage('/checkout')
    setStoredData(form)

    if (localStorage.getItem('E-commerce Login')) {
      toast.success('order placed')
      dispatch({type:'cart/delete'})
      setTimeout(() => {
        navigate('/')
      }, 2000);
      
     } else {
      navigate('/signin')
     }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <ToastContainer/>

      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing & Shipping Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={form.address}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP Code"
                  value={form.zip}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="cardName"
                  placeholder="Name on Card"
                  value={form.cardName}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={form.cardNumber}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="expiry"
                  placeholder="Expiry (MM/YY)"
                  value={form.expiry}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={form.cvv}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <ul className="divide-y divide-gray-200 mb-4">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between py-2 text-sm">
                  <span>
                    {item.name.slice(0, 20)} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
