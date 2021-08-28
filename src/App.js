import { NavBar } from "./components/NavBar/NavBar";
import "./styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Clock } from "./components/Clock/Clock";
import { ClickTracker } from "./components/ClickTracker/ClickTracker";
import { useState } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {

  return (
    <>
      <BrowserRouter>
           
        <NavBar/>
      
        <Switch>
          <Route exact path="/">
              <ItemListContainer/>
          </Route>
          <Route exact path="/category/:catId">
              <ItemListContainer/>
          </Route>

          <Route exact path="/detail/:itemId">
            <ItemDetailContainer/>
          </Route>
          

          <Route exact path="/nosotros">
              <h1>Nosotros</h1>
          </Route>
          <Route exact path="/cart">
              <h1>Carrito</h1>
          </Route>





        </Switch>
      
      
      </BrowserRouter>
    </>
    
  );
}

export default App;
