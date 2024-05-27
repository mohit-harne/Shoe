import React from 'react';
import {   Route, Routes, HashRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Collection from './components/Collection';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import Cart from './components/Cart';
import Favorate from './components/Favorate';
import End from './components/End';
import Menshoe1 from './components/Menshoe1';
import Menshoe2 from './components/Menshoe2';
import Menshoe3 from './components/Menshoe3';
import Kidshoe1 from './components/Kidshoe1';
import ProductDetail from './components/ProductDetail';
import { Auth0Provider } from '@auth0/auth0-react';

const App = () => {
  return (
    <Auth0Provider
      domain="dev-sh3dfiaxaa2e1bzf.us.auth0.com"
      clientId="3JJzlkdvBVS9iH5HnxZsEOroGJWgPGkr"
      redirectUri={window.location.origin}
    >
      <div className="overflow-y-hidden">
        <HashRouter >
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorate" element={<Favorate />} />
            <Route path="/menshoe1" element={<Menshoe1 />} />
            <Route path="/menshoe2" element={<Menshoe2 />} />
            <Route path="/menshoe3" element={<Menshoe3 />} />
            <Route path="/kidshoe1" element={<Kidshoe1 />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <End />
        </HashRouter>
      </div>
    </Auth0Provider>
  );
};

export default App;
  