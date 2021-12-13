import React from 'react';

const AllRecipeRow = (props) => {
    const{last, art, customer, _id} = props.recipe;
    const setUpdate = props.setUpdate

    const handleDelete = e =>{
        const proceed = window.confirm("Are you sure ???")
        if(proceed){
            fetch(`https://quiet-fjord-05435.herokuapp.com/recipe/${_id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount>0){
                alert("Recipe deleted successfully")
                setUpdate(data)
            }
            else{
                return
            }
        })
        }
        else{
            return
        }
        e.preventDefault()
    }


    return (
        <tr>
                <th scope="row">#</th>
                <td>{last}</td>
                <td>{art}</td>
                <td>{customer}</td>
                <td><button onClick={handleDelete} className='btn btn-danger text-white'>Delete</button></td>
        </tr>
    );
};

export default AllRecipeRow;