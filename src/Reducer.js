// here we define all the application level states and define actions to make the changes to the state

export const initialState = {
  basket: localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket"))
    : [],
};

//Selector

export const getBasketTotal = (basket) => {
  return basket?.reduce(
    (amount, item) => amount + item.price * item.quantity,
    0
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const newItem = action.item;
      const existItem = state.basket.find((item) => item.id === newItem.id);
      const cartItems = existItem
        ? state.basket.map((item) =>
            item.id === existItem.id ? newItem : item
          )
        : [...state.basket, newItem];

      localStorage.setItem("basket", JSON.stringify(cartItems));
      return {
        ...state,
        basket: cartItems,
      };

    case "REMOVE_FROM_BASKET":
    //   const index = state.basket.findIndex(
    //     (basketItem) => basketItem.id === action.id
    //   );

    //   let newBasket = [...state.basket];

    //   if (index >= 0) {
    //     newBasket.splice(index, 1);
    //   } else {
    //     console.warn(
    //       `Can't remove product(id: ${action.id}) as its not in the basket!`
    //     );
    //   }
      const newBasket = state.basket.filter((item) => item.id !== action.id)
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
      };
    case "CHANGE_QTY":
      const prdt = state.basket.find((e) => e.id == action.id);
      if (prdt) {
        if (action.payload == "increment") {
          prdt.quantity += 1;
        } else if (action.payload == "decrement") {
          if (prdt.quantity > 1) prdt.quantity -= 1;
        }
      } else {
        console.warn(`Product doesn't exist in the basket!`);
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
      return {
        ...state,
        basket: state.basket,
      };
    default:
      return state;
  }
};

export default reducer;
