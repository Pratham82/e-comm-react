import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "components/navbar";
import Routing from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </div>
  );
}

export default App;
