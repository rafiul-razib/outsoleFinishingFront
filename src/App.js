import './App.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddRecipe from './pages/AddRecipe/AddRecipe';
import Navigation from './pages/AddRecipe/Shared/Navigation';
import Details from './pages/Details/Details';
import AllRecipe from './pages/AllRecipe/AllRecipe';
import { useState } from 'react';

function App() {
  const[displayOutsoles, setDisplayOutsoles] = useState([])
  const[serchedOutsole, setSerchedOutsole]= useState('');
  const[recipe, setRecipe] = useState([])
  return (
    <div>
      <Router>
        <Navigation
        displayOutsoles={displayOutsoles} 
        setDisplayOutsoles={setDisplayOutsoles}
        serchedOutsole={serchedOutsole}
        setSerchedOutsole={setSerchedOutsole}
        recipe={recipe}
        setRecipe={setRecipe}/>
        <Switch>
          <Route exact path="/">
            <Home  
            displayOutsoles={displayOutsoles} 
            setDisplayOutsoles={setDisplayOutsoles}
            serchedOutsole={serchedOutsole}
            setSerchedOutsole={setSerchedOutsole}
            recipe={recipe}
            setRecipe={setRecipe}
            ></Home>
          </Route>
          <Route path="/addRecipe">
            <AddRecipe></AddRecipe>
          </Route>
          <Route path="/recipe/:id">
            <Details></Details>
          </Route>
          <Route path="/all-recipe">
            <AllRecipe></AllRecipe>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
