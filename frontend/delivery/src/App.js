import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CalculateDistanceView from "./pages/CalculateDistanceView";
import SearchHistoryView from "./pages/SearchHistoryView";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" strict>
          <CalculateDistanceView></CalculateDistanceView>
        </Route>
        <Route exact path="/search-history" strict>
          <SearchHistoryView></SearchHistoryView>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
