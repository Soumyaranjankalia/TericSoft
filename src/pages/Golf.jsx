import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchGolfData } from "../Redux/action";


export const Golf = () => {
    const dispatch = useDispatch();
    const  {golf}  = useSelector(state => state.armoury);
    console.log(golf);
  
    useEffect(() => {
      dispatch(fetchGolfData());
    }, []);
    console.log(golf);

  return (
    <div className='grid'>
    {golf.map((e)=> (
        <div><img src={e.image} alt="" /></div>

    ))}
</div>
  )
}
