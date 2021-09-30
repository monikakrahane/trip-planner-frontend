import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserRegistration from "./components/Registrations/UserRegistration";
import VendorRegistration from "./components/Registrations/VendorRegistration";
import UserLogin from "./components/Login/UserLogin";
import VendorLogin from "./components/Login/VendorLogin";
import Dashboard from "./components/UserDashboard/Dashboard";
import VendorDashboard from "./components/VendorDashboard/VendorDashboard";
import About from "./components/pages/About";
import Packages from "./components/UserDashboard/Packages/Packages";
import VendorPackages from "./components/VendorDashboard/Packages/VendorPackages";
import PackageDetails from "./components/VendorDashboard/Packages/PackageDetails";
import AddPackage from "./components/VendorDashboard/Packages/AddPackage";
import Destinations from "./components/UserDashboard/Destinations/Destinations";
import Hotels from "./components/UserDashboard/Hotels/Hotels";
import SingleHotel from "./components/UserDashboard/Hotels/SingleHotel";
import SavedHotels from "./components/UserDashboard/SavedHotels";
import SavedDestinations from "./components/UserDashboard/SavedDestinations";
import SavedPackages from "./components/UserDashboard/SavedPackages";
import UserProfile from "./components/UserDashboard/UserProfile";
import Cart from "./components/UserDashboard/Cart";
import VendorProfile from "./components/VendorDashboard/VendorProfile";
import SingleDestination from "./components/UserDashboard/Destinations/SingleDestination";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserRegistration} />
        <Route path="/VendorRegistration" component={VendorRegistration} />
        <Route path="/VendorLogin" component={VendorLogin} />
        <Route path="/UserLogin" component={UserLogin} />
        <Route path="/UserDashboard" component={Dashboard} />
        <Route path="/VendorDashboard" component={VendorDashboard} />
        <Route path="/about" component={About} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/hotels/:id" component={SingleHotel} />

        <Route path="/destinations/:id" component={SingleDestination} />
        <Route path="/savedHotels" component={SavedHotels} />
        <Route path="/packages" component={Packages} />
        <Route path="/VendorPackages" component={VendorPackages} />
        <Route path="/PackageDetails" component={PackageDetails} />
        <Route path="/AddPackage" component={AddPackage} />
        <Route path="/vendorProfile" component={VendorProfile} />

        <Route path="/savedDestinations" component={SavedDestinations} />
        <Route path="/savedPackages" component={SavedPackages} />
        <Route path="/userProfile" component={UserProfile} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
//Madhuri
