import HeaderCart from "./Cart/HeaderCard";
import './Header.css'

function Header(props) {
  return (
    <header>
      <h1>ReactMeals</h1>
      <HeaderCart />
    </header>
  );
}

export default Header;
