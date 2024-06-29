import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import furnitureService from '../../services/furnitureService';

const FurnitureDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const fetchedItem = await furnitureService.getFurnitureById(id);
        setItem(fetchedItem);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="furniture-detail">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <button className="btn btn-success">Add to Cart</button>
    </div>
  );
};

export default FurnitureDetail;
