import './MealsCard.css';
import CartContext from '../Context/CartContext';
import { useContext } from 'react';
import Meal from './Meal/Meal';

function MealsCard() {
    const ctx = useContext(CartContext);
    const mealsArr = []
    for (const meal in ctx.food) {
        mealsArr.push(<Meal handleClick={ctx.onAdd} key={meal} id={meal} name={ctx.food[meal].name} descr={ctx.food[meal].descr}  price={ctx.food[meal].price} />)
    };
  return (
    <div className="meals-card">
        {mealsArr}
    </div>
  );
}

export default MealsCard;
