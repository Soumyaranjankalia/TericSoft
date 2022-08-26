import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchAquaticsData } from "../Redux/action";

export const Aquatics = () => {

    const dispatch = useDispatch();
    const  {aquatics}  = useSelector(state => state.armoury);
    console.log(aquatics);
  
    useEffect(() => {
      dispatch(fetchAquaticsData());
    }, []);
    console.log(aquatics);

  return (
    <div>
    {aquatics.map((e)=> (
        <div><img src={e.image} alt="" /></div>

    ))}
</div>
  )
}
