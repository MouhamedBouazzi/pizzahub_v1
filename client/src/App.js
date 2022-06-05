import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Cartscreen from "./components/Cartscreen";

import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import Register from "./components/Register";
import { getCurrent } from "./redux/Actions/userActions";
import PrivateRoute from "./routers/PrivateRoute";
import Ordersscreen from "./components/Ordersscreen";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cartscreen/>} />
        <Route path="/orders" element={<Ordersscreen/>}></Route>


      </Routes>
    </div>
  );
}

export default App;
