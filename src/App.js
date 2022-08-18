import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home.js";
import Navbar from "./Components/pages/Navbar.js";
import RoadMap from "./Components/pages/RoadMap.js";
import Faq from "./Components/pages/Faq.js";
import Smoandfriends from "./Components/pages/Smoandfriends";
import Contact from "./Components/pages/Contact.js";
import Shop from "./Components/pages/Shop.js";

// import Smoandfriends from "./Components/Smoandfriends.js";
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/RoadMap" component={RoadMap} />
          <Route exact path="/Smoandfriends" component={Smoandfriends} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Shop" component={Shop} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
