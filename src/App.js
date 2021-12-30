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
import AuthProvider from './pages/AuthProvider/AuthProvider';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  const[displayOutsoles, setDisplayOutsoles] = useState([])
  const[serchedOutsole, setSerchedOutsole]= useState('');
  const[recipe, setRecipe] = useState([])
  return (
    <div>
      <AuthProvider>
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
          <PrivateRoute path="/addRecipe">
            <AddRecipe></AddRecipe>
          </PrivateRoute>
          <Route path="/recipe/:id">
            <Details></Details>
          </Route>
          <PrivateRoute path="/all-recipe">
            <AllRecipe></AllRecipe>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
