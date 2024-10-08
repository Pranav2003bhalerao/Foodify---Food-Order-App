import React, { useContext, useState } from "react";
import "./Placeholder.css";
import { StoreContext } from "../../Context/StoreContext";

const Placeholder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    pin_code: "",
    area: "",
    phone: "",
    state: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const placeOrder = async (event) => {
  //   event.preventDefault();

  //   let orderItems = [];
  //   food_list.map((item) => {
  //     if (cartItems[item._id] > 0) {
  //       let itemInfo=item;
  //       itemInfo["quantity"]=cartItems[item._id];
  //       orderItems.push(itemInfo)
  //     }
  //   })
  //   console.log(orderItems);
  // }
  const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];
    food_list.forEach((item) => {  // Changed from map to forEach
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };  // Spread syntax to avoid mutation
        orderItems.push(itemInfo);
      }
    });
    
    console.log(orderItems);
}


  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name"
          />
          <input
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
        />
        <input
          name="area"
          onChange={onChangeHandler}
          value={data.area}
          type="text"
          placeholder="Area"
        />
        <div className="multi-fields">
          <input
            name="pin_code"
            onChange={onChangeHandler}
            value={data.pin_code}
            type="text"
            placeholder="Pin-Code"
          />
          <input
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City"
          />
        </div>
        <div className="multi-fields">
          <input
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
          />
          <input
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            placeholder="Phone"
          />
        </div>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs{getTotalCartAmount() === 0 ? 0 : 40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                Rs{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 40}
              </b>
            </div>
          </div>
          <button type="submit">PROCEED TO Payment</button>
        </div>
      </div>
    </form>
  );
};

export default Placeholder;
