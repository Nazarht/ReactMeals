import Button from "../../../Button/Button";
import "./ModalCart.css";
import CartItem from "./CartItem";
import CartContext from "../../../Context/CartContext";
import { useContext } from "react";

function ModalCart(props) {
  const ctx = useContext(CartContext);

  const handleClick = () => {
    ctx.setCartState(false);
  };

  const result = [];

  for (const meal in ctx.addedList) {
    result.push(
      ctx.addedList[meal] > 0 && (
        <CartItem
        id={meal}
          key={meal}
          price={ctx.food[meal].price}
          name={ctx.food[meal].name}
          amount={ctx.addedList[meal]}
          onMinus={ctx.onMinus}
          onPlus={ctx.onPlus}
        />
      )
    );
  }

  return (
    <div className="modal-background">
      <div className="modal-window">
        <div className="modal-result">
          {result}
          <div className="total">
            <h3>Total Amount</h3>
            <h3>${ctx.totalPrice || '0.00'}</h3>
          </div>
        </div>
        <div className="button-holder">
          <button className="modal-button" onClick={handleClick}>
            Close
          </button>
          <Button>Order</Button>
        </div>
      </div>
    </div>
  );
}
export default ModalCart;
