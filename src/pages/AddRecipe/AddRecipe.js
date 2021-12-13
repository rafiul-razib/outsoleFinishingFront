import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const AddRecipe = () => {
    const[last, setLast] = useState("");
    const[art, setArt] = useState("");
    const[finishing, setFinishing] = useState('');
    const[image, setImage] = useState(null);
    const[customer, setCustomer] = useState('');
    const[manpower, setManpower] = useState('');


    const handleOnSubmit = e =>{
        const formData = new FormData();
        formData.append("last", last);
        formData.append("art", art);
        formData.append("finishing", finishing);
        formData.append("image", image);
        formData.append("manpower", manpower);
        formData.append("customer", customer);

       

        fetch("https://quiet-fjord-05435.herokuapp.com/add-recipe",{
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data =>{
         console.log(data)
            }
        );
        e.preventDefault()
    }
 
    
  
    return (
        <div className="container pt-4">
            <form onSubmit={handleOnSubmit}>

                <label htmlFor="last" className="form-label">Last Name</label>
                <input id="last" className="p-2 form-control" type="text" onChange={e=>setLast(e.target.value)} />

                <label htmlFor="art" className="form-label">Article</label>
                <input id="art" className="p-2 form-control" type="text" onChange={e=>setArt(e.target.value)} />

                <label htmlFor="customer" className="form-label">Customer</label>
                <input id="customer" className="p-2 form-control" type="text" onChange={e=>setCustomer(e.target.value)} />

                <label htmlFor="art" className="form-label">Image</label>
                <input type="file" id="art" className="p-2 form-control" onChange={e =>setImage(e.target.files[0])} />

                <label htmlFor="Recipe" className="form-label">Recipe</label>
                <ReactQuill theme="snow"  onChange={setFinishing}/>
                
                
                <label htmlFor="Manpower" className="form-label">Manpower distribution</label>
                <ReactQuill theme="snow"  onChange={setManpower}/>
         


                <input value="Add Recipe" className="p-2 w-25 form-control bg-success text-white mt-3" type="submit" />
            </form>
        </div>
    );
};

export default AddRecipe;