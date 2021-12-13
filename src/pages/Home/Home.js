import React, { useEffect, useState } from 'react';
import Outsole from './Outsole';


const Home = () => {
    const[recipe, setRecipe] = useState([])
    // const[imageData, setImageData] = useState({});
    

    // Convert image to base64
         
    // const [baseImage, setBaseImage] = useState("");
    // const imgCode = baseImage.split("base64,")[1];

    // const uploadImage = async (e) => {
    //     const file = e.target.files[0];
    //     const base64 = await convertBase64(file);
    //     setBaseImage(base64);
    // };

    // const convertBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //     const fileReader = new FileReader();
    //     fileReader.readAsDataURL(file);

    //     fileReader.onload = () => {
    //         resolve(fileReader.result);
    //     };

    //     fileReader.onerror = (error) => {
    //         reject(error);
    //     };
    //     });
    // };


    // Submit Image
    // const handleSubmit = e =>{
    //     e.preventDefault()
    //     const formData = new FormData();
    //     formData.append("image", imgCode)
        
    //     fetch('https://api.imgbb.com/1/upload?expiration=600&key=37135d18bd19f1104dc1c1e780d9fa9f', {
    //         method:"POST",
    //         // headers:{
    //         //     "content-type": "application/json"
    //         // },
    //         body: formData
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         setImageData(data)
    //     })
    // }

    useEffect(()=>{
        fetch("https://quiet-fjord-05435.herokuapp.com/recipe")
        .then(res => res.json())
        .then(data =>{
            setRecipe(data)
        })
    },[])
    return (
        <div className='container py-4'>
            <div className='row'>
            {
                recipe.map(rcp => <Outsole rcp={rcp} key={rcp._id}></Outsole>)
            }
            </div>

            {/* <form onSubmit={handleSubmit}>
                <input type= "file" onChange={(e) => {
                    uploadImage(e);
                    }}/>
                <button className='btn btn-success'>Upload</button>
            </form> */}
            {/* <div>
                <img src={imageData.data.url} alt="" />
            </div> */}
        </div>
    );
};

export default Home;