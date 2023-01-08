import "./App.css";
import Header from "./Components/Header/Header";
import UpperMain from "./Components/UpperMain/UpperMain";
import MealsCard from "./Components/MealsCard/MealsCard";
import ModalCart from "./Components/Header/Cart/ModalCart/ModalCart";
import CartContext from "./Components/Context/CartContext";
import { useContext } from "react";

function App() {
  const ctx = useContext(CartContext);

  return (
    <>
      <Header />
      <main>
        {ctx.cartState && <ModalCart />}
        <UpperMain />
        <MealsCard />
      </main>
    </>
  );
}

export default App;
