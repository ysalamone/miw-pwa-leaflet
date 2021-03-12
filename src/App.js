import React, { useReducer, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import './App.css';
import MapContext from "./contexts/MapContext";
import mapReducer from "./reducers/mapReducer";
import Map from "./components/Map";
import MarkersList from "./components/MarkersList";
import Info from "./components/Info";

const App = () => {
  const [state, dispatch] = useReducer(mapReducer, {markers: [], geolocation: false, info: null })
  const context = { state, dispatch }

  const [user, setUser] = useState(state.info);

  useEffect(() => setUser(state.info), [state])

  return (
      <MapContext.Provider value={context}>
        <small>Yohan Salamone</small>
        <Router>
          <Switch>
            <Route path="/markers">
              <MarkersList />
            </Route>
            <Route path="/info">
              <Info user={user} setUser={setUser}/>
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/">
              <Redirect to="/map" />
            </Route>
          </Switch>
        </Router>
        { user ?
            <div>
              <h2>Mes infos</h2>
              <div>Prénom : {user ? user.firstname : ''}</div>
              <div>Nom : {user ? user.lastname : ''}</div>
              <div>E-mail : {user ? user.email : ''}</div>
            </div> : <></>
        }
      </MapContext.Provider>
  )
}

export default App;
