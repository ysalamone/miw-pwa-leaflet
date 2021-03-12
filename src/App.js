import React, { useReducer } from 'react';
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


const App = () => {
  const [state, dispatch] = useReducer(mapReducer, {markers: []})
  const context = { state, dispatch }

  return (
      <MapContext.Provider value={context}>
        <Router>
          <Switch>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/">
              <Redirect to="/map"></Redirect>
            </Route>
          </Switch>
        </Router>
      </MapContext.Provider>
  )
}

export default App;
