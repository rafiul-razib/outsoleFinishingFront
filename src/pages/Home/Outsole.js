import React from 'react';
import ReactQuill from 'react-quill';

const Outsole = ({rcp}) => {
    const{last, imageBuffer, recipe} = rcp;
    return (
        <div>
            <img style={{width: "100px"}} src={`data: image/png; base64, ${imageBuffer}`} alt="" />
            <br/>
            <h3>{last}</h3>
            <h3>{recipe}</h3>
            <div dangerouslySetInnerHTML={{__html: recipe}}></div>
            <ReactQuill readOnly={true}
            theme={"bubble"} value={recipe}/>
        </div>
    );
};

export default Outsole;