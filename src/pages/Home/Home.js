import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Outsole from './Outsole';

const Home = () => {
    const[recipe, setRecipe] = useState([])

    useEffect(()=>{
        fetch("https://quiet-fjord-05435.herokuapp.com/recipe")
        .then(res => res.json())
        .then(data =>{
            setRecipe(data)
        })
    },[])
    return (
        <div>
            {
                recipe.map(rcp => <Outsole rcp={rcp} key={rcp._id}></Outsole>)
            }
        </div>
    );
};

export default Home;