import React from 'react';
import { Product } from '../../../types';

type Props = {
    products: Array<Product>;
};

const cardStyle = {
    borderWidth: '2px',
    transition: 'box-shadow 0.3s', // Add transition for hover effect
};

const ProductsOverview: React.FC<Props> = ({ products }: Props) => {
    return (
        <div className="row">
            {products &&
                products.map((product, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card  market-card" style={cardStyle}>
                            <img
                                src="https://loremflickr.com/320/240"
                                className="card-img-top"
                                alt="Product"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">
                                    <strong>Serial:</strong> {product.serialNumber}
                                </p>
                                <p className="card-text">
                                    <strong>Price:</strong> ${product.price}
                                </p>
                                <p className="card-text">
                                    <strong>Description:</strong> {product.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ProductsOverview;
