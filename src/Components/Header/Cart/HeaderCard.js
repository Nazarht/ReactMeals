import Icon from "./shopping-cart-icon.png";
import './HeaderCard.css'
import CartContext from "../../Context/CartContext";
import { useContext } from "react";

function HeaderCart(props) {
    const ctx = useContext(CartContext)

    const handleClick = () => {
        ctx.setCartState(true)
    }
  return (
    <div className="header-card" onClick={handleClick}>
      <img src={Icon} alt='cart icon'></img>
      <p>Your Cart</p>
      <span>{Object.values(ctx.addedList).reduce((a, b) => { return   a + b})}</span>
    </div>
  );
}

export default HeaderCart;
