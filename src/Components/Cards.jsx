import { useCart } from "../Api/CartContext";

export default function Cards({ products, selectedCategories = [] }) {

  const { cart, addToCart, increaseQty, decreaseQty} = useCart();

  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((item) =>
          selectedCategories.includes(item.category)
        );

  return (
    <div className="card-container">
      {filteredProducts.map((product) => {
        const inCart = cart.find((p) => p.id === product.id);

        return (
          <div className="card" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>₹{product.price}</p>

            {!inCart ? (
              <button
                className="card-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            ) : (
              <div className="qty-controls">
                <div className="qty-box"> 
                  <button onClick={() => decreaseQty(product.id)}>−</button>
                  <span>{inCart.quantity}</span>
                  <button onClick={() => increaseQty(product.id)}>+</button>
                  </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}