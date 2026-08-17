import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helper/helper";

const CartContext = createContext();

const initialState = {
  selectedItems: [],
  counterItems: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (
        !state.selectedItems.find((product) => product.id === action.payload.id)
      ) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };
    }
    case "REMOVE_FROM_CART": {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };
    }
    case "INCREASE_QUANTITY": {
      const selectedItems = state.selectedItems.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );

      return {
        ...state,
        selectedItems,
        ...sumProducts(selectedItems),
      };
    }
    case "DECREASE_QUANTITY": {
      const selectedItems = state.selectedItems.map((product) =>
        product.id === action.payload.id
          ? {
              ...product,
              quantity: Math.max(product.quantity - 1, 1),
            }
          : product,
      );

      return {
        ...state,
        selectedItems,
        ...sumProducts(selectedItems),
      };
    }
    case "CHECKOUT":
      return {
        selectedItems: [],
        counterItems: 0,
        total: 0,
        checkout: true,
      };

    default:
      throw new Error("Invalid action");
  }
};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
export { useCart };
