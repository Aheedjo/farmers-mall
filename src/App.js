import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Index from './pages'
import theme from './themes/default'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from './pages/products';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Switch>
          <Route path='/products'>
            <Products/>
          </Route>

          <Route path='/'>
            <Index/>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App