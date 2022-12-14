import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Payment from "./components/cart/Payment";
import OrderSuccess from "./components/cart/OrderSuccess";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import { loadUser } from "./actions/userActions";
import store from "./store";
import { useEffect, useState } from "react";
import Profile from "./components/user/Profile";
import ProtectedRoute from "./components/route/ProtectedRoute";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";
import axios from 'axios';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

function App() {

  const [stripeApiKey, setStripeApiKey] = useState('');

  useEffect(() => {
    store.dispatch(loadUser());

    async function getStripeApiKey() {
      const {data} = await axios.get('/api/v1/stripeapi');
      setStripeApiKey(data.stripeApiKey)
    };

    getStripeApiKey();

  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="conatiner container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/search/:keyword" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route 
              path="/shipping" 
              element={
                <ProtectedRoute>
                  <Shipping />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/order/confirm" 
              element={
                <ProtectedRoute>
                  <ConfirmOrder />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/success" 
              element={
                <ProtectedRoute>
                  <OrderSuccess />
                </ProtectedRoute>
              } 
            />
            {stripeApiKey &&
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Route 
                  path="/order/confirm" 
                  element={
                    <ProtectedRoute>
                      <ConfirmOrder />
                    </ProtectedRoute>
                  }
                  component={Payment} 
                />
              </Elements>
            }
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/me"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/me/update"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/password/update"
              element={
                <ProtectedRoute>
                  <UpdatePassword />
                </ProtectedRoute>
              }
            />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<NewPassword />} />

            {/* <Route path="/search/:keyword" component={Home} /> */}

            {/* <Route path="/product/:id" component={ProductDetails} exact /> */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
