import React, { useState } from 'react'
import axios from 'axios'
import ProductForm from './ProductForm'

export default function AddProduct({ products, setProducts}) {
    const [inputs, setInputs] = useState({
        title:'', 
        price:'', 
        description:''
    })
    const [errors, setErrors] = useState([]); 
    const onSubmitHandler = e => {
        e.preventDefault();
        // console.log(inputs)
        axios.post('http://localhost:8000/api/products/new', {
            ...inputs
        })
            .then(res=> {
                setProducts([...products, res.data.product])
                setInputs({
                    title:'', 
                    price:'', 
                    description:''
                })
                setErrors({})
            })
            .catch(err=> {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // Set Errors
                setErrors(errorResponse);
            })
        
    }
    return (
        <div className="text-center">
            <h1>Product Manager</h1>
            <ProductForm action="Create" onSubmitHandler={onSubmitHandler} inputs={inputs} setInputs={setInputs} errors={errors}/>
        </div>
    )
}
