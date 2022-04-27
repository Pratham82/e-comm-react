import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "components/navbar";
import FilterProvider from "contexts/filter/filterState";
import DataSourceProvider from "contexts/dataSource/dataSourceState";
import WishlistProvider from "contexts/wishlist/wishlistState";
import CartProvider from "contexts/cart/cartState";
import AuthProvider from "contexts/auth/authState";
import { Toaster } from "react-hot-toast";
import Routing from "./routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <CartProvider>
            <WishlistProvider>
              <DataSourceProvider>
                <FilterProvider>
                  <Navbar />
                  <Toaster position="bottom-left" />
                  <Routing />
                </FilterProvider>
              </DataSourceProvider>
            </WishlistProvider>
          </CartProvider>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
