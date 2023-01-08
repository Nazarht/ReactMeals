import React, { useEffect, useState } from "react";

const FoodList = {
  sushi: { name: "Sushi", descr: "Finest fish and rice", price: 14.99 },
  shnitzel: {
    name: "Snitzel",
    descr: "A German deep-fried steak",
    price: 18.99,
  },
  burger: { name: "Burger", descr: "Best meat and vegetables", price: 15.99 },
  bowl: {
    name: "Bowl",
    descr: "Bowl with meat, rice and vegatables",
    price: 12.99,
  },
  macncheese: {
    name: "Mac'n'Cheese",
    descr: "American version of italian dish",
    price: 17.99,
  },
};

const CartContext = React.createContext({
    food: FoodList,
    addedList: 'addedMeal',
    onAdd: 'onAdd',
    cartState: 'cartState',
    setCartState: 'setCartState'
});

export function CartContextProvider(props) {
  const [addedMeal, setAddedMeal] = useState({
    sushi: 0,
    shnitzel: 0,
    burger: 0,
    bowl: 0,
    macncheese: 0,
  });

  const [cartState, setCartState] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  const [foodList] = useState({
    sushi: { name: "Sushi", descr: "Finest fish and rice", price: 14.99 },
    shnitzel: {
      name: "Snitzel",
      descr: "An Austrian deep-fried steak",
      price: 18.99,
    },
    burger: { name: "Burger", descr: "Best meat and vegetables", price: 15.99 },
    bowl: {
      name: "Bowl",
      descr: "Bowl with meat, rice and vegatables",
      price: 12.99,
    },
    macncheese: {
      name: "Mac'n'Cheese",
      descr: "American version of italian dish",
      price: 17.99,
    },
  });
  

  useEffect(() => {
    let total = 0;
    for (const meal in addedMeal) {
                total += addedMeal[meal] * foodList[meal].price
            
        }
        setTotalPrice(Math.round(total * 100) / 100)
    }, [addedMeal,foodList])


  const onAdd = (key, amount) => {
    console.log(totalPrice)
    setAddedMeal((prevState) => {
        console.log(
            {
                ...prevState,
                [key]: +prevState[key] + +amount
            }
        )
        return {
            ...prevState,
            [key]: +prevState[key] + +amount
        }
    });
  };

  

  const onPlus = (key) => {
    setAddedMeal((prevState) => {
        return {
            ...prevState,
            [key]: +prevState[key] + 1
        }
    });
  } 

  const onMinus = (key) => {
    setAddedMeal((prevState) => {
        return {
            ...prevState,
            [key]: +prevState[key] - 1
        }
    });
  } 

  

  return (
    <CartContext.Provider
      value={{
        food: foodList,
        addedList: addedMeal,
        onAdd: onAdd,
        cartState: cartState,
        setCartState: setCartState,
        onPlus: onPlus,
        onMinus: onMinus,
        totalPrice: totalPrice
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
