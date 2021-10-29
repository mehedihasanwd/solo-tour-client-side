import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./Components/Context/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import MyOrders from "./Components/MyOrders/MyOrders";
import ManageAllOrders from "./Components/ManageAllOrders/ManageAllOrders";
import AddNewService from "./Components/AddNewService/AddNewService";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/manageorders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/addservice">
              <AddNewService></AddNewService>
            </Route>
            <Route path="/placeorder">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
