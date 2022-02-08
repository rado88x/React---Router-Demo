import { Route } from "react-router-dom";
import Products from "./pages/Products";
import Welecome from "./pages/Welcome";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <header>
        <MainHeader></MainHeader>
      </header>
      <main>
        <Route path="/welcome">
          <Welecome></Welecome>
        </Route>
        <Route path="/products">
          <Products></Products>
        </Route>
      </main>
    </div>
  );
}

export default App;
