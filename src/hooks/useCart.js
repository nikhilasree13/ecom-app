import { useSelector, useDispatch } from "react-redux";
import {
  addToCart as addToCartAction,
  increaseQty as increaseQtyAction,
  decreaseQty as decreaseQtyAction,
  removeItem as removeItemAction,
} from "../store/cartSlice";

// Custom hook that mirrors the old useCart API but uses Redux under the hood
export const useCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = (product) => dispatch(addToCartAction(product));
  const increaseQty = (id) => dispatch(increaseQtyAction(id));
  const decreaseQty = (id) => dispatch(decreaseQtyAction(id));
  const removeItem = (id) => dispatch(removeItemAction(id));

  return { cart, addToCart, increaseQty, decreaseQty, removeItem };
};
