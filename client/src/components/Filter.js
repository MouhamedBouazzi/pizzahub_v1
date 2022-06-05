import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../redux/Actions/pizzaActions";
export default function Filter() {
    const dispatch = useDispatch()
    const[searchkey , setsearchkey] = useState('')
    const[category , setcategory] = useState('all')
    return (
        <div className='container'>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">

                    <div className="col-md-2 w-40">
                      <input
                      onChange={(e)=>{setsearchkey(e.target.value)}}
                      value={searchkey} type="text" className="form-control w-40" placeholder="search pizzas"/>
                    </div>
                    <div className="col-md-3 w-40">
                        <select className="form-control w-40 md-3" value={category} onChange={(e)=>setcategory(e.target.value)}>
                            <option value="all">All</option>
                            <option value="veg">Veg</option>
                            <option value="nonveg">Non Veg</option>
                        </select>
                    </div>
                    <div className="col-md-3 w-40">
                       <button className='btn w-40 md-3' onClick={()=>{dispatch(filterPizzas(searchkey , category))}}>FILTER</button>
                    </div>

            </div>
        </div>
    )
}