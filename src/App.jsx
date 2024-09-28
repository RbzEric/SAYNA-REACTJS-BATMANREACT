import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../src/components/NavBar';
import Layout from './pages/Layout';
import ESHOP from './pages/eshop';
import AddProduit from './components/addProduit';
import Login from './pages/COMPTE/connexion/Login';
import Footer from '../src/components/footer';
import Account from './pages/COMPTE/Account/Compte';
import Signup from './pages/COMPTE/inscription/Signup';
import FicheProduit from './components/ficheProduit';
import Panier from '../src/components/Panier';
import RecapitulatifPanier from './components/RecapPanier';
import { AuthContext } from './components/AuthContext';
import { AuthProvider } from './components/AuthContext';
import Inscription from './components/inscription';
import BuyWithAccount from './components/BuyWithAccount';
import BuyWithoutAccount from './components/BuyWithoutAccount';
import ThanksContext from './components/ThanksContext';
import '../src/styles/App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/eshop" element={<ESHOP />}> </Route>
          <Route path="AddProduit" element={<AddProduit />}></Route>
          <Route path="produit/:id" element={<FicheProduit />}></Route>
          <Route path='panier' element={<Panier />}></Route>
          <Route path="recapPanier" element={<RecapitulatifPanier />} />
          <Route path='authentication' element={<AuthContext />}></Route>
          <Route path="/inscription" element={<Inscription />} />
          <Route path='/paidWithAccount' element={<BuyWithAccount />}></Route>
          <Route path='/paidWithoutAccount' element={< BuyWithoutAccount />}></Route>
          <Route path='/thanksPages' element={< ThanksContext />}></Route>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Account />} />
          <Route path='/signup' element={<Signup />}></Route>



          <Route path='/' element={<ESHOP />}></Route>

        </Routes>
        <Footer />
      </Router>

    </AuthProvider>

  )
}

export default App
