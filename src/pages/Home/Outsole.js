import React from 'react';
import { Link } from 'react-router-dom';


const Outsole = ({rcp}) => {
    const{last, imageBuffer, _id, art, customer} = rcp;
    return (
        <div className='col-md-3 col-12'>
            <div className="card text-center" style={{width:"100%"}}>
            {/* <img src={`data: image/png; base64, ${imageBuffer}`} className="card-img-top" alt="..."/> */}
            <div className="card-body">
                <h5 className="card-title">{last} {art}</h5>
                <p className="card-text">{customer}</p>
                <Link to={`/recipe/${_id}`}>
                    <button className='btn btn-success'>Details</button>
                </Link>
            </div>
            </div>
            {/* <img style={{width: "100px"}} src={`data: image/png; base64, ${imageBuffer}`} alt="" />
            <br/>
            <h3>{last}</h3>
            <h3>{recipe}</h3>
            <div dangerouslySetInnerHTML={{__html: recipe}}></div>
            <ReactQuill readOnly={true}
            theme={"bubble"} value={recipe}/> */}
        </div>
    );
};

export default Outsole;