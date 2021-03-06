import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Details.css';


const Details = () => {
    const outsoleId = useParams();
   
    const[outsole, setOutsole] = useState({});

    const url = `https://quiet-fjord-05435.herokuapp.com/recipe/${outsoleId.id}`
  
    useEffect(()=>{
   
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setOutsole(data)
        })
    },[outsoleId.id])

    return (
        <div className='mt-5'>
            <div className="card mx-auto pt-2" style={{width:"100%"}}>
            <img src={outsole.imageUrl} className="card-img-top img-fluid" style={{width:"100%"}} alt="..."/>
            <div className="card-body my-4">
                <h2 className="card-title">{outsole.last} {outsole.art}</h2>
                <p className="card-text">Customer: {outsole.customer}</p>
                <p className="card-text">Color: {outsole.color}</p>
                <div className='information text-start'>
                    <h4>Finishing Recipe</h4>
                <div dangerouslySetInnerHTML={{__html: outsole.finishing}}></div>
                </div>
                <div className='information text start'>
                    <h4>Manpower Distribution</h4>
                <div  dangerouslySetInnerHTML={{__html: outsole.manpower}}></div>
                </div>
                <Link to='/'>
                <button className='btn btn-danger text-white w-100'>Back to Home</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default Details;