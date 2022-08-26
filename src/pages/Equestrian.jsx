import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchEquestrianData } from "../Redux/action";

export const Equestrian = () => {
    const dispatch = useDispatch();
    const  {equestrian}  = useSelector(state => state.armoury);
    console.log(equestrian);
  
    useEffect(() => {
      dispatch(fetchEquestrianData());
    }, []);
    console.log(equestrian);

  return (
    <div>
    {equestrian.map((e)=> (
        <div><img src={e.image} alt="" /></div>

    ))}
</div>
  )
}
