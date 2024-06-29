import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import FurnitureList from './components/Furniture/FurnitureList';
import FurnitureDetail from './components/Furniture/FurnitureDetail';
import UserProfile from './components/Profile/UserProfile';
import BookingCart from './components/Booking/BookingCart';
import Payment from './components/Payment/Payment';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/furniture" component={FurnitureList} />
          <Route path="/item/:id" component={FurnitureDetail} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/cart" component={BookingCart} />
          <Route path="/payment" component={Payment} />
          <Route path="/" exact component={FurnitureList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
