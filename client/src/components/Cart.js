import React, { useContext, useState } from "react";
import axios from "axios";
import { RestaurantContext } from "../contexts/RestaurantContext";

const Cart = () => {
    const { totalPrice, emptyCart } = useContext(RestaurantContext);
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [showDetailsForm, setShowDetailsForm] = useState(false);
    const [customerDetails, setCustomerDetails] = useState({
        name: "",
        address: "",
        phone: "",
    });

    const generateOrderId = () => {
        return `${Math.floor(Math.random() * 1000)}`;
    };

    const handleCheckoutClick = () => {
        setShowDetailsForm(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handlePlaceOrder = async () => {
        try {
            setIsCheckingOut(true);

            const orderId = generateOrderId();

            // Assuming you have a backend endpoint for placing orders
            await axios.post("http://localhost:5000/previousOrders", {
                orderId,
                dateOfOrder: new Date(),
                amount: totalPrice,
                ...customerDetails,
            });

            alert("Order placed successfully!");
            emptyCart();
            setShowDetailsForm(false);
        } catch (error) {
            console.error("Error during order placement:", error.message);
        } finally {
            setIsCheckingOut(false);
        }
    };

    return (
        <div className="cart-container">
            {!showDetailsForm ? (
                <>
                    <h2>Cart</h2>
                    <div className="cart-content">
                        <span style={{ color: "brown" }}>Total Price: </span> ${totalPrice}
                        <button onClick={handleCheckoutClick} disabled={isCheckingOut}>
                            {isCheckingOut ? "Processing..." : "Checkout"}
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h2>Delivery Details</h2>
                    <form className="delivery-form">
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={customerDetails.name}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Address:
                            <textarea
                                name="address"
                                value={customerDetails.address}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Phone Number:
                            <input
                                type="tel"
                                name="phone"
                                value={customerDetails.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <button
                            type="button"
                            onClick={handlePlaceOrder}
                            disabled={isCheckingOut}
                        >
                            {isCheckingOut ? "Placing Order..." : "Place Order"}
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Cart;
