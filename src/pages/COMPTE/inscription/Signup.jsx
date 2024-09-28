import "./Signup.css";
import React, {useState} from "react";
import { Link ,useNavigate } from "react-router-dom";
import {auth,db} from '../../../components/config';
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Google from "../../../assets/logos/logo_8.png";
import Apple from "../../../assets/logos/logo_7.png";
import fbIcon from "../../../assets/logos/logo_4.2.png";

const Signup = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [firstname , setFirstName] = useState('');
    const [email , setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error ,setError] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                // Crée un document dans la collection
                return setDoc(doc(db, 'SignedUpUserData', cred.user.uid), {
                    Name: name,
                    FirstName: firstname,
                    Email: email,
                });
            })
            .then(() => {
                setName('');
                setFirstName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setError('');
                navigate('/login'); 
            })
            .catch(err => setError(err.message));
    };

    return (
        <main>
            <div className="inscription-texte">
                <h1>INSCRIPTION</h1>
                <p className="stitle">
                    Vous avez déjà un compte ?
                    <span>
                        <Link to="/login">Connectez vous ici</Link>
                    </span>
                </p>
                <form action="" className="inscri-info" autoComplete="off" onSubmit={handleSignup}>
                    <label htmlFor="Name">Nom</label> <br />
                    <input type="text" name="" id="Name" placeholder="Nom" required onChange={(e) => setName(e.target.value)} value={name} /> <br />
                    <label htmlFor="FirstName">Prénom</label> <br />
                    <input type="text" name="" id="First-name" placeholder="Prénom" required onChange={(e) => setFirstName(e.target.value)} value={firstname} /> <br />
                    <label htmlFor="Email">Identifiant</label> <br />
                    <input type="email" name="" id="inscri-email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} value={email}/> <br />
                    <label htmlFor="password">Mot de passe</label> <br />
                    <input type="password" name="" className="inscri-password" placeholder="mot de passe" required onChange={(e) => setPassword(e.target.value)} value={password} />
                    <label htmlFor="Confirmpassword">Confirmer votre mot de passe</label> <br />
                    <input type="password" name="" className="inscri-password" placeholder="Confirmation du mot de passe" required onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                    <p className="inscri-condition">Je reconnais avoir pris connaissance et j’accepte les
                        termes des <span> <Link>conditions générales d’utilisation</Link></span>.</p>
                        <div class="switch-container">
                                    <input type="checkbox" id="toggleSwitch" class="switch-checkbox" />
                                    <label class="switch-label" for="toggleSwitch">
                                        <span class="switch-button"></span>
                                    </label>
                                </div>
                    <button className="btn btn-succes btn-md mybtn">VALIDER</button>
                    <p>Connectez vou avec</p>
                    <div className="lign2"></div>
                    <Link to="">
                        <img src={Google} alt="" className="con-icon" />
                    </Link>
                    <Link to="">
                        <img src={Apple} alt="" className="con-icon" />
                    </Link>
                    <Link to="">
                        <img src={fbIcon} alt="" className="con-icon" />
                    </Link>
                </form>
                {error && <div className="error-msg">{error}</div>}
            </div>
        </main>
    );
};

export default Signup;
