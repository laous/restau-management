import React, { useState } from "react";
interface CustomerCardTypes {
  name: string;
}
function CustomerCard({ name }: CustomerCardTypes) {
  const [foodInput, setFoodInput] = useState("");

  const [food, setFood] = useState(["M39ouda"]);

  const handleAddFood = () => {
    if (!foodInput) return;
    setFood([...food, foodInput]);
    setFoodInput("");
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => (
            <p>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodInput}
            onChange={(e) => setFoodInput(e.target.value)}
          />
          <button onClick={handleAddFood}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
