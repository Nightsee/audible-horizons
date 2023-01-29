import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Redirect from './pages/Redirect';
import Appdashboard from './pages/Appdashboard';
import Signin from './pages/Signin';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer';
import Profil from './pages/Profil';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'

if(process.env.NODE_ENV === "production"){ disableReactDevTools() }

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path='/api' element={<Appdashboard />} />
          <Route path='/api/profil' element={<Profil />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/' element={<Home />} />
          <Route path='/authentification' element={<Signup />} />
          {/* <Route path='*' element={<Redirect />} /> */}
        </Routes>
      
    </BrowserRouter>
  </Provider>
);

