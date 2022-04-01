import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "components/navbar";
import FilterProvider from "contexts/filter/filterState";
import DataSourceProvider from "contexts/dataSource/dataSourceState";
import CartProvider from "contexts/cart/cartState";
import Routing from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <DataSourceProvider>
            <FilterProvider>
              <Navbar />
              <Routing />
            </FilterProvider>
          </DataSourceProvider>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
