import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Friends from "./Components/Friends/Friends";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Meal from "./Components/Meal/Meal";
import Meals from "./Components/Meals/Meals";
import NotFound from "./Components/NotFound/NotFound";
import Product from "./Components/Product/Product";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/products" element={<Friends></Friends>}></Route>
        <Route path="/Product/:pro" element={<Product></Product>}></Route>
        <Route path="/meals" element={<Meals></Meals>}>
          <Route path=":id" element={<Meal></Meal>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
