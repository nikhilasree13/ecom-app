import { useState } from "react";
import './Sidebar.css'

export default function Sidebar({ setSelectedCategories }) {
  const [open, setOpen] = useState(true);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    setSelectedCategories((prev) =>
      checked
        ? [...prev, value]
        : prev.filter((c) => c !== value)
    );
  };

  return (
    <div>
      <button className="toggle-btn" onClick={() => setOpen(!open)}>
        {open ? "Close" : "Open"}
      </button>


      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <br />
        <h3>Category</h3>

        <label>
          <input type="checkbox" value="fruit" onChange={handleChange} />
          Fruits
        </label>

        <label>
          <input type="checkbox" value="vegetable" onChange={handleChange} />
          Vegetables
        </label>

        <label>
          <input type="checkbox" value="dairy" onChange={handleChange} />
          Dairy
        </label>
      </div>
    </div>
  );
}