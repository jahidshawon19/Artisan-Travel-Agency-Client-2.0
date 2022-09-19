
import TourHome from '../src/components/Tour/TourHome'; 
import Home from '../src/components/Home/Home';
import Order from './components/Tour/Order/Order';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';

import  AuthProvider  from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddPacakge from './components/Admin/AddPacakge/AddPacakge';
import AdminHome from './components/Admin/AdminHome/AdminHome';
import OrderDetails from './components/Admin/OrderDetails/OrderDetails';
import UpdatePackage from './components/Admin/UpdatePackage/UpdatePackage';
import Success from './components/Success/Success';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        
      <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/tours">
              <TourHome></TourHome>
            </Route>

            <PrivateRoute path="/tour/order/:tourId">
              <Order></Order>
            </PrivateRoute>

            <PrivateRoute path="/profile">
              <Profile></Profile>
            </PrivateRoute>

            <PrivateRoute path="/success">
              <Success></Success>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>


            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/addPackage">
                <AddPacakge></AddPacakge>
            </Route>

            <Route path="/updatePackage/:id">
              <UpdatePackage></UpdatePackage>
            </Route>

            <Route path="/adminhome">
                <AdminHome></AdminHome>
            </Route>

            <Route path="/order/:orderId">
                <OrderDetails></OrderDetails>
            </Route>
            
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
