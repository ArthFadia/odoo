import React from 'react';
import { Link } from 'react-router-dom';

const FurnitureItem = ({ item }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text"><strong>Price:</strong> ${item.price}</p>
          <Link to={`/item/${item.id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default FurnitureItem;
