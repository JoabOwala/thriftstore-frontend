import { useState, useEffect } from 'react';
import './Product.css';

function AddProduct({ productId }) {

    const [product, setProduct] = useState({

        name: '',
        description: '',
        image: '',
        price: '',
        quantity: ''
    });

    useEffect(() => {
        // Fetch product data from API
    }, [productId]);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/products/${productId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            });

            if (response.ok) {
                console.log('Product updated successfully!');
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="addproduct-nav">
            <div className="container my-5">
                <div className="col-md-8 mx-auto delete h-100">
                    <div className="card shadow px-3 py-5 styled-card">
                        <h2 className="card-title text-center">Add Product</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="input-data">
                                    <input
                                        type="text"
                                        required
                                        onChange={handleChange}
                                    />
                                    <div className="underline"></div>
                                    <label htmlFor="name">Product Title</label>
                                </div>
                                <div className="input-data">
                                    <input
                                        type="text"
                                        required

                                        onChange={handleChange}
                                    />
                                    <div className="underline"></div>
                                    <label htmlFor="description">Product Description</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data">
                                    <input
                                        type="text"
                                        required
                                        onChange={handleChange}
                                    />
                                    <div className="underline"></div>
                                    <label htmlFor="image">Image URL</label>
                                </div>
                                <div className="input-data">
                                    <input
                                        type="number"
                                        required
                                        onChange={handleChange}
                                    />
                                    <div className="underline"></div>
                                    <label htmlFor="price">Product Price</label>
                                </div>
                                <div className="input-data">
                                    <input
                                        type="number"
                                        required
                                        onChange={handleChange}
                                    />
                                    <div className="underline"></div>
                                    <label htmlFor="quantity">Product Quantity</label>
                                </div>
                            </div>
                            <div className="form-row submit-btn">
                                <div className="input-data">
                                    <div className="inner"></div>
                                    <input type="submit" value="ADD"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default AddProduct;