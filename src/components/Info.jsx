import React, { useContext, useState } from 'react'
import MapContext from "../contexts/MapContext";
import {Link} from "react-router-dom";

const Info = () => {

    const { state, dispatch } = useContext(MapContext);
    const [user, setUser] = useState(state.info ? state.info : {firstname: '', lastname: '', email: ''});
    const [message, setMessage] = useState('')

    const saveInfo = () => {
        if(user.firstname.length >= 2
            && user.lastname.length >= 2
            && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email)) {
            dispatch({'type': 'save_info', data: {info: user} })
            setMessage('');
        }
        else {
            setMessage('L\'un des champs est mal rempli.')
        }
    }

    return (
        <>
            <h1>Gérer mes infos</h1>
            <Link to="/map">Retour à la carte</Link>
            <div>
                <label htmlFor="firstname">Prénom :</label>
                <input type="text"
                       id="firstname"
                       name="firstname"
                       value={user.firstname}
                       onChange={(e) => setUser({...user, firstname: e.target.value })}/>
            </div>
            <div>
                <label htmlFor="lastname">Nom :</label>
                <input type="text"
                       id="lastname"
                       name="lastname"
                       value={user.lastname}
                       onChange={(e) => setUser({...user, lastname: e.target.value })}/>
            </div>
            <div>
                <label htmlFor="email">E-mail :</label>
                <input type="text"
                       id="email"
                       name="email"
                       value={user.email}
                       onChange={(e) => setUser({...user, email: e.target.value })}/>
            </div>
            <button onClick={saveInfo}>Enregistrer</button>
            <div>{message}</div>
        </>
    )
}

export default Info