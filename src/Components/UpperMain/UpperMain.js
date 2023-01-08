import "./UpperMain.css";

function UpperMain(props) {
  return (
    <div className="food-card-holder">
      <div className="food-card-back"></div>
      <div className="food-card">
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Coose your favorite meal from our broad selection of avaliable meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingridients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
}

export default UpperMain;
