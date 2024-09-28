import '../styles/ThanksContext.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ThanksContext = () => {
    return (
        <div className='thanksPages'>
            <div className='nav-link'>
                <NavLink to="/eshop" className='nav-link'>E-shop</NavLink> / <NavLink to="/panier" className='nav-link'>Panier</NavLink> / <NavLink to="/recapPanier" className='nav-link'>Récapitulatif de votre panier</NavLink> / <NavLink to="/inscription" className='nav-link'>Authentification</NavLink> / <NavLink to="/paidWithoutAccount" className='nav-link'>Livraison et paiement </NavLink>/ <NavLink to="/thanksPages" className='nav-link'>Achat confirmé</NavLink>
            </div>
            <div className='vignette'>
                <h1 className='thanks'>Merci pour votre commande !</h1>
                <p className='text-thanks'>Nous mettons nos meilleurs agents sur le coup en espérant que le Joker ne les occupera pas trop ! <br />
                    Retrouvez le détail de votre commande ci-dessous et dans le mail de confirmation envoyé à l’adresse <br />
                    mail renseignée. Vous n’avez pas reçu le mail ?<NavLink>Renvoyer la confirmation d’achat.</NavLink> </p>
                <div className='btn-back'>
                    <button className='btn-backHome'>Revenir à l’accueil</button>
                    <button className='btn-backShop'>Retourner au catalogue</button>
                </div>

            </div>
        </div>
    )
}

export default ThanksContext