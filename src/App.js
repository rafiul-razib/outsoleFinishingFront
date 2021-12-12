import './App.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddRecipe from './pages/AddRecipe/AddRecipe';
import Navigation from './pages/AddRecipe/Shared/Navigation';

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/addRecipe">
            <AddRecipe></AddRecipe>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
