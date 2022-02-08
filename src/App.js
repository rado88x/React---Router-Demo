import { Route } from "react-router-dom";
import Products from "./pages/Products";
import Welecome from "./pages/Welcome";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Route path="/welcome">
        <Welecome></Welecome>
      </Route>
      <Route path="/products">
        <Products></Products>
      </Route>
    </div>
  );
}

export default App;
