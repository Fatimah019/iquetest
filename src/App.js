import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PersonalInfo from "./Components/PersonalInfo";
import BillingInfo from "./Components/BillingInfo";
import ConfirmPayment from "./Components/ConfirmPayment";
import FinishPayment from "./Components/FinishPayment";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={PersonalInfo} />
          <Route path="/billing" component={BillingInfo} />
          <Route path="/confirm-payment" component={ConfirmPayment} />
          <Route path="/payment-complete" component={FinishPayment} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
