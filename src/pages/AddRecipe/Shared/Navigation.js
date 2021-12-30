import React from 'react';
import useAuth from '../../hooks/useAuth';


const Navigation = (props) => {
    const{user, logOut} = useAuth()
    const searchedOutsole = props.serchedOutsole;
    const setSearchedOutsole = props.setSerchedOutsole;
    const setDisplayOutsoles = props.setDisplayOutsoles;

    const recipe = props.recipe;

    const handleChange = e =>{
        const searchedText = e.target.value;
        const matchedLast = recipe.filter(recipe => recipe.last.toLowerCase().includes(searchedText.toLowerCase()));
        setDisplayOutsoles(matchedLast)
    }

    const handleLogOut = e =>{
        logOut()
        e.preventDefault()
    }

    console.log(searchedOutsole)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">OutsoleFinishing</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/addRecipe">Add Recipe</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/all-recipe">All Recipe</a>
                </li>
                <li className="nav-item">
                {
                    user.email?
                    <button className='btn btn-success mx-2' onClick={handleLogOut}>Log Out</button>
                    :
                    <a className="nav-link" href="/login">Login</a>
                }
                </li>
                {
                    user.email && <span className='navbar-text'>Signed in as {user.email}</span>
                }
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" 
                placeholder="Search" aria-label="Search"
                onChange={handleChange}/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    );
};

export default Navigation;