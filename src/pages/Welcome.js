import { Route } from "react-router-dom";

const Welecome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Route path="/welcome/new-user">
          <p>Welcome New User!</p>
      </Route>
    </section>
  );
};

export default Welecome;
