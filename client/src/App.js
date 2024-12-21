// App.js

import React, { useContext } from "react";
import RestaurantList from "./components/RestaurantList";
import DishesMenu from "./components/DishesMenu";
import Cart from "./components/Cart";
import { RestaurantContext } from "./contexts/RestaurantContext";
import "./App.css"; // Import the CSS file

// Add this in the return section of App.js:


const App = () => {
    const { selectedRestaurant } = useContext(RestaurantContext);

    return (
        <>
            <div className="container">
                <h1 className="header">ZAP Food Delivery</h1>
                <Cart
                    style={{ position: "absolute", right: "20px", top: "20px" }}
                />
                <RestaurantList/>
            
                <Cart />
            </div>
        </>
    );
};

export default App;

