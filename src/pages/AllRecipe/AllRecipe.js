import React, { useEffect, useState } from 'react';
import AllRecipeRow from './AllRecipeRow';

const AllRecipe = () => {
    const [allRecipe, setAllRecipe] = useState([])
    const[update, setUpdate] = useState(false)

    useEffect(()=>{
        fetch("https://quiet-fjord-05435.herokuapp.com/recipe")
        .then(res => res.json())
        .then(data =>{
            setAllRecipe(data)
        })
    },[update])
    return (
        <div className='container mt-5'>
            <table class="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Last</th>
                <th scope="col">Art</th>
                <th scope="col">Color</th>
                <th scope="col">Customer</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    allRecipe.map(recipe => <AllRecipeRow key={recipe._id} recipe={recipe} setUpdate={setUpdate}></AllRecipeRow>)
                }
            </tbody>
        </table>
        </div>
    );
};

export default AllRecipe;