import React from "react";
import Header from "../components/header";
import plantsData from "../data.js";
import PlantCard from "../components/Plantcard";
const Shopping = () => {
  return (
    <>
      <Header />

      <div className="shopping-page">
        {/* Air Purifying Plants */}
        <h2>Air Purifying Plants</h2>
        <div className="plant-cards-container">
          {plantsData.airPurifying.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
            //   onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Aromatic Fragrant Plants */}
        <h2>Aromatic Fragrant Plants</h2>
        <div className="plant-cards-container">
          {plantsData.aromaticFragrant.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
            //   onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Insect Repellent Plants */}
        <h2>Insect Repellent Plants</h2>
        <div className="plant-cards-container">
          {plantsData.insectRepellent.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
            //   onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Medicinal Plants */}
        <h2>Medicinal Plants</h2>
        <div className="plant-cards-container">
          {plantsData.medicinal.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
            //   onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Low Maintenance Plants */}
        <h2>Low Maintenance Plants</h2>
        <div className="plant-cards-container">
          {plantsData.lowMaintenance.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
            //   onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shopping;
