import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart,deleteFromCart } from "../redux/Actions/cartActions";
import { Navigate } from "react-router-dom";
import Checkout from "./Checkout"




import "./cart.css"
export default function Cartscreen() {
  
  // const [navigate, setNavigate] = useState(false);
  
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();

  // const orderstate = useSelector((state) => state.placeOrderReducer);
  // const { success } = orderstate;  

  // if (success) {
  //   localStorage.removeItem("cartItems");
  //   cartItems.map((item) => {
  //     dispatch(deleteFromCart(item));
  //   });
  //   setTimeout(() => {
  //     setNavigate(true);
  //   }, 2000);
  // }
  // if (navigate) {
  //   return <Navigate to="/orders" />;
  // }
  return (
    <div>
      <div className="row justify-content-center p-2">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>

          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left m-1 w-100">
                  <h1>
                    {item.name} [{item.varient}]
                  </h1>
                  <h1>
                    Price : {item.quantity} * {item.prices[0][item.varient]} ={" "}
                    {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity : </h1>
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.varient)
                      );
                    }}
                  ></i>
                  <b>{item.quantity}</b>
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.varient)
                      );
                    }}
                  ></i>
                  <hr />
                </div>

                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    style={{ height: "80px", height: "80px" }}
                  />
                </div>
                <div className="m-1 w-100">
                  <i
                    className="fa fa-trash mt-5"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-md-4 text-center">
          <h2 style={{ fontSize: "45px" }}>SubTotal : {subtotal} TND</h2>
          {/* <button className="btn" style={{color:'red'}}>CHECKOUT</button> */}
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
// export default function Cartscreen() {
//   const cartstate = useSelector((state) => state.cartReducer);
//   const cartItems = cartstate.cartItems;
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <h2 style={{ fontsize: "40px" }}>My Cart</h2>
//           {cartItems.map((item) => {
//             return (
//               <div className="flex-container" >
//                 <div className="text-left m-1" style={{width : '1900px'}}>
//                   <h1>
//                     {item.name} [{item.varient}]
//                   </h1>
//                   <h1>
//                     Price: {item.quantity}*{item.prices[0][item.varient]}=
//                     {item.price}
//                   </h1>
//                   <h1>Quantity : </h1>
//                   <i
//                     className="fa fa-plus"
//                     aria-hidden="true"
//                     onClick={() => {
//                       dispatch(
//                         addToCart(item, item.quantity + 1, item.varient)
//                       );
//                     }}
//                   ></i>
//                   <b>{item.quantity}</b>
//                   <i
//                     className="fa fa-minus"
//                     aria-hidden="true"
//                     onClick={() => {
//                       dispatch(
//                         addToCart(item, item.quantity - 1, item.varient)
//                       );
//                     }}
//                   ></i>
//                   <hr />
//                 </div>
//                 <div className="m-1 w-100">
//                   <img
//                     src={item.image}
//                     style={{ height: "80px", height: "80px" }}
//                   />
//                 </div>
//                 <div className="m-1 w-100">
//                   <i
//                     className="fa fa-trash mt-5"
//                     aria-hidden="true"
                    
//                   ></i>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <div className="col-md-4"></div>
//       </div>
//     </div>
//   );
// }
