import React, { useState } from 'react';

const PlantCard = ({ plant, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);  // State to track if item is added

  const handleAddToCart = (plant) => {
    onAddToCart(plant);
    setIsAdded(true);  // Set the state to true when item is added
    setTimeout(() => setIsAdded(false), 1500);  // Reset the state after 1.5 seconds
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-card-img" />
      <div className="plant-card-details">
        <h3>{plant.name}</h3>
        <p>{plant.description}</p>
        <p>Price: ${plant.price}</p>
        <button 
          onClick={() => handleAddToCart(plant)} 
          className={isAdded ? "added-to-cart" : ""}
        >
          {isAdded ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default PlantCard;
