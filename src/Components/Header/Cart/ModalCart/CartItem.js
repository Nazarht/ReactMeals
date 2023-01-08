import "./CartItem.css";

function CartItem(props) {

    const handleMinus = () => {
        props.onMinus(props.id)
    }

    const handlePlus = () => {
        props.onPlus(props.id)
    }
  return (
    <div className="item-holder">
      <div className="left-holder">
        <h3>{props.name}</h3>
        <span className="item-price">${props.price}</span>
        <span className="item-amount">x {props.amount}</span>
      </div>
      <div className="right-holder">
        <button className="item-button" onClick={handleMinus}>-</button>
        <button className="item-button" onClick={handlePlus}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
