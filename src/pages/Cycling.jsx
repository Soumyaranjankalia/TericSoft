import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchCyclingData } from "../Redux/action";

export const Cycling = () => {

    const dispatch = useDispatch();
    const  {cycling}  = useSelector(state => state.armoury);
    console.log(cycling);
  
    useEffect(() => {
      dispatch(fetchCyclingData());
    }, []);
    console.log(cycling);

  return (
    <div>
    {cycling.map((e)=> (
        <div><img src={e.image} alt="" /></div>

    ))}
</div>
  )
}
