import React, { useState, useEffect } from "react";
// import pizzas from "../data";

import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../redux/Actions/pizzaActions";
import Error from "./Error";
import Filter from "./Filter";
import Loading from "./Loading";
import Pizza from "./Pizza"
function Home() {

  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return <div>
<Filter/>
<div className="row justify-content-center">
       
        {loading ? (
        <Loading/>

        ) : error ? (
          <Error error='Something went wrong'/>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3" key={pizza._id}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
  </div>;
}

export default Home;
