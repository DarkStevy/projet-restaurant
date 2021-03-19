import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Desserts } from "./components/Desserts";
import { Drinks } from "./components/Drinks";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Sandwich } from "./components/Sandwich";
import { Summary } from "./components/Summary";
import './styles/style.scss';


function App() {
  return (
    <Router>
      <Header/>
      <Summary/>
      <Switch>
          <Route path="/sandwich">
            <Sandwich />
          </Route>
          <Route path="/drinks">
            <Drinks />
          </Route>
          <Route path="/desserts">
            <Desserts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
