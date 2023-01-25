import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/ducks/store'
import "font-awesome/css/font-awesome.css"
import styled from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
      </Provider>
  </React.StrictMode>
);

const NavbarWrapper = styled.nav`
body { margin: 0px !important}
`

