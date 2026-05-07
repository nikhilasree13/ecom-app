import Sidebar from "../Components/Sidebar";
import Cards from "../Components/Cards";
import { useState } from "react";

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const products = [
    { id: 1, name: "Apple", category: "fruit", price: 30 },
    { id: 2, name: "Carrot", category: "vegetable", price: 60 },
    { id: 3, name: "Banana", category: "fruit", price: 25 },
    { id: 4, name: "Raw Banana", category: "vegetable", price: 50 },
    { id: 5, name: "Milk", category: "dairy", price: 40 },
    { id: 6, name: "Curd", category: "dairy", price: 20 }
  ];

  return (
    <div className="main">
      <Sidebar setSelectedCategories={setSelectedCategories} />

      <Cards
        products={products}
        selectedCategories={selectedCategories}
      />
    </div>
  );
}