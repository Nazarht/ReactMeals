import { useState } from "react";
import Button from "../../Button/Button";
import "./Meal.css";

function Meal(props) {
  const [amount, setAmount] = useState(0);

  const handleChange = ({ target }) => {
    setAmount(target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    props.handleClick(props.id, amount);
    setAmount(0)
  }

  return (
    <div className="meals-holder">
      <div className="left-holder">
        <h3>{props.name}</h3>
        <p>{props.descr}</p>
        <span>${props.price}</span>
      </div>
      <div className="right-holder">
        <form>
          <div>
            <label>Amount</label>
            <input type="number" min="0" step="1" onChange={handleChange} value={amount}/>
          </div>
          <Button onClick={handleClick} type={"submit"} disabled={amount === 0}>
            +Add
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Meal;
