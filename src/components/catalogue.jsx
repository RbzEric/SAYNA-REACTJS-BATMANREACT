import '../styles/catalogue.css';
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../components/config";
import { collection, getDocs } from "firebase/firestore";
import PanierIcon from '../../src/assets/icones/icone_1.png';
import { CartContext } from './CartContext';


const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("Sort");
  const navigate = useNavigate();

  const handleSort = (event) => {
    setSelectedSort(event.target.value);
  };

  const { addToCart } = useContext(CartContext);

  const handleCheckOut = () =>
    navigate('/panier');


  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "Produits");
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className='catalogue'>
      <img src={PanierIcon} alt="PanierIcon" className='icon-panier' onClick={handleCheckOut} />
      <div className='Result-sort'>
        <h3 className='result'>Résultats: 122</h3>
        <select className="product-sort" value={selectedSort} onChange={handleSort}>
          <option value="Sort" disabled selected className='opt'>Trier par</option>
          <option value="categorie" className='opt'>Categorie</option>
          <option value="Prix" className='opt'>Prix</option>
          <option value="Couleur" className='opt' >Couleur</option>
        </select>
      </div>

      <ul className='products'>
        {products.map((Produit) => (
          <li key={Produit.id}>
            <Link to={`/produit/${Produit.id}`}><img src={Produit.ProductImage} alt={Produit.ProductName} /></Link>
            <p className='product-name'>{Produit.ProductName}</p>
            <p className='product-price'><span className='old-price'>{Produit.oldPrice}€</span><span className='new-price'>{Produit.newPrice}€</span></p>
            <button className='product-btn' onClick={() => addToCart(Produit)}>Ajouter au panier</button>
          </li>
        ))}

      </ul>

    </div>

  )
}
export default ProductCatalog;
