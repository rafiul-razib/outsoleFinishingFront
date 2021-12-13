import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './AddRecipe.css'


const AddRecipe = () => {
    const[last, setLast] = useState("");
    const[art, setArt] = useState("");
    const[finishing, setFinishing] = useState('');
    const[image, setImage] = useState(null);
    const[customer, setCustomer] = useState('');
    const[manpower, setManpower] = useState('');
    // const[imgUrl, setImgUrl] = useState('');

    const[imageData, setImageData] = useState({});

    const history = useHistory()

    const imgUrl = imageData?.data?.url
    console.log(imgUrl)
    const handleOnSubmit = e =>{
        const formData = new FormData();
        formData.append("last", last);
        formData.append("art", art);
        formData.append("finishing", finishing);
        formData.append("imageUrl", imgUrl );
        formData.append("manpower", manpower);
        formData.append("customer", customer);

       

        fetch("https://quiet-fjord-05435.herokuapp.com/add-recipe",{
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data =>{
         if(data.insertedId){
             alert("Recipe saved successfully!!!")
            history.push('/')
         }
            }
        );
        e.preventDefault()
    }

    // Image Upload

    // Convert image to base64
         
    const [baseImage, setBaseImage] = useState("");
    const imgCode = baseImage.split("base64,")[1];

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
        });
    };


    // Submit Image
    const handleSubmit = e =>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", imgCode)
        
        fetch('https://api.imgbb.com/1/upload?expiration=600&key=37135d18bd19f1104dc1c1e780d9fa9f', {
            method:"POST",
            // headers:{
            //     "content-type": "application/json"
            // },
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            setImageData(data)
        })
    }
 
    
  
    return (
        <div className="container pt-4 my-4">

           <div className='imageUpload'>
           <form onSubmit={handleSubmit} className='pt-3 w-75 mx-auto'>
                <input type= "file" onChange={(e) => {
                    uploadImage(e);
                    }}/>
                <button className='btn btn-success'>Upload Image</button>
            </form>
            <div className='pt-3 w-75 mx-auto'>
                <img style={{width:"350px"}} src={imageData?.data?.url} alt="" />
            </div>
           </div>
            <form onSubmit={handleOnSubmit} className='pt-3 w-75 mx-auto'>

                <label htmlFor="last" className="form-label">Last Name</label>
                <input id="last" className="p-2 form-control" type="text" onChange={e=>setLast(e.target.value)} />

                <label htmlFor="art" className="form-label">Article</label>
                <input id="art" className="p-2 form-control" type="text" onChange={e=>setArt(e.target.value)} />

                <label htmlFor="customer" className="form-label">Customer</label>
                <input id="customer" className="p-2 form-control" type="text" onChange={e=>setCustomer(e.target.value)} />

                {/* <label htmlFor="customer" className="form-label">Image url</label>
                <input id="customer" value={imageData?.data?.url} className="p-2 form-control" type="text" onBlur={e=>setImgUrl(e.target.value)} /> */}

                {/* <label htmlFor="art" className="form-label">Image</label>
                <input type="file" id="art" className="p-2 form-control" onChange={e =>setImage(e.target.files[0])} /> */}

                <label htmlFor="Recipe" className="form-label">Recipe</label>
                <ReactQuill theme="snow"  onChange={setFinishing}/>
                
                
                <label htmlFor="Manpower" className="form-label">Manpower distribution</label>
                <ReactQuill theme="snow"  onChange={setManpower}/>
         


                <input value="Add Recipe" className="p-2 w-25 form-control bg-success text-white mt-3  w-100" type="submit" />
            </form>
        </div>
    );
};

export default AddRecipe;