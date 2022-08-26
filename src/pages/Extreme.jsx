import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchExtremeData } from "../Redux/action";

export const Extreme = () => {
    const dispatch = useDispatch();
    const  {extreme}  = useSelector(state => state.armoury);
    console.log(extreme);
  
    useEffect(() => {
      dispatch(fetchExtremeData());
    }, []);
    console.log(extreme);

  return (
    <div>
    {extreme.map((e)=> (
        <div><img src={e.image} alt="" /></div>

    ))}
</div>
  )
}
