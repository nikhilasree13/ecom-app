import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>No items</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <h4>{item.name}</h4>
              <h4>₹{item.price} * {item.quantity}</h4>
            </div>

           <div className="cart-controls">
            <button onClick={() => decreaseQty(item.id)}>−</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button> 
            <span></span>
            <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
          </div>
          </div>
        ))
      )}
      <br />
      <h2>Total: ₹{total}</h2>

      <button onClick={() => navigate("/checkout")}>
        Pay Amount
      </button>
    </div>
  );
}