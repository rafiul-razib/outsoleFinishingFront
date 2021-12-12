import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.development';


const Details = () => {
    const outsoleId = useParams();
   
    const[outsole, setOutsole] = useState({});

    const url = `https://quiet-fjord-05435.herokuapp.com/recipe/${outsoleId.id}`
  
    console.log(url)
    useEffect(()=>{
   
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setOutsole(data)
        })
    },[outsoleId.id])

    return (
        <div>
            <div className="card" style={{width:"100%"}}>
            <img src={`data: image/png; base64, ${outsole.imageBuffer}`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{outsole.last} {outsole.art}</h5>
                <p className="card-text">{outsole.customer}</p>
                <div dangerouslySetInnerHTML={{__html: outsole.finishing}}></div>
                <div dangerouslySetInnerHTML={{__html: outsole.manpower}}></div>
                <Link to='/'>
                <button className='btn btn-danger text-white'>Back to Home</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default Details;