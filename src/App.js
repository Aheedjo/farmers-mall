import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './themes/default';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrivateRoute from './services/authGuard';
import Products from './pages/products';
import Stores from './pages/stores';
import LoginPage from './pages/login';
import SignUp from './pages/signup';
import OwnStorePage from './pages/ownStore';
import StoreDetailsPage from './pages/storeDetails';
import Index from './pages';
import ProductDetailsPage from './pages/ProductDetails';
import DashboardPage from './pages/dashboard';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from './pages/payment';
import ContactUs from './pages/contactUs';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/stores'>
            <Stores />
          </PrivateRoute>
          <PrivateRoute exact path='/products'>
            <Products />
          </PrivateRoute>
          <Route exact path='/login'>
            <LoginPage />
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
          <PrivateRoute exact path='/dashboard'>
            <DashboardPage />
          </PrivateRoute>
          <PrivateRoute exact path='/store/:id'>
            <StoreDetailsPage />
          </PrivateRoute>
          <PrivateRoute exact path='/product/:id'>
            <ProductDetailsPage />
          </PrivateRoute>
          <PrivateRoute exact path='/own-store'>
            <OwnStorePage />
          </PrivateRoute>
          <PrivateRoute exact path='/checkout'>
            <CheckoutPage />
          </PrivateRoute>
          <PrivateRoute exact path='/payment'>
            <PaymentPage />
          </PrivateRoute>
          <Route exact path='/contact'>
            <ContactUs />
          </Route>
          <PrivateRoute exact path='/'>
            <Index />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
