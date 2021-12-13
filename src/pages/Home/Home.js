import React, { useEffect, useState } from 'react';
import Outsole from './Outsole';


const Home = (props) => {
    const searchedOutsole = props.serchedOutsole;
    const displayOutsoles = props.displayOutsoles;
    const setDisplayOutsoles = props.setDisplayOutsoles;
    const recipe = props.recipe;
    const setRecipe = props.setRecipe

    

    useEffect(()=>{
        fetch("https://quiet-fjord-05435.herokuapp.com/recipe")
        .then(res => res.json())
        .then(data =>{
            setRecipe(data)
            setDisplayOutsoles(data)
        })
    },[])
    return (
        <div className='container py-5 mt-5'>
            <h5>Total saved recipe : {recipe.length}</h5>
            <div className='row g-4'>
            {
                displayOutsoles.map(rcp => <Outsole rcp={rcp} key={rcp._id}></Outsole>)
            }
            </div>

           
        </div>
    );
};

export default Home;