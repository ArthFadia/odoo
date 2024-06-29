import React, { useState, useEffect } from 'react';
import furnitureService from '../../services/furnitureService';
import FurnitureItem from './FurnitureItem';

const FurnitureList = () => {
  const [furnitureItems, setFurnitureItems] = useState([]);

  useEffect(() => {
    const fetchFurniture = async () => {
      try {
        const items = await furnitureService.getFurniture();
        setFurnitureItems(items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFurniture();
  }, []);

  return (
    <div className="furniture-list">
      <h2>Furniture Catalog</h2>
      <div className="row">
        {furnitureItems.map((item) => (
          <FurnitureItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FurnitureList;
