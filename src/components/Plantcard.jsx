import React from 'react';

const PlantCard = ({ plant, onAddToCart }) => {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-card-img" />
      <div className="plant-card-details">
        <h3>{plant.name}</h3>
        <p>{plant.description}</p>
        <p>Price: ${plant.price}</p>
        <button onClick={() => onAddToCart(plant)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default PlantCard;
