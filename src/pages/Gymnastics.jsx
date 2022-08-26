import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchGymnasticsData } from "../Redux/action";

export const Gymnastics = () => {
    const dispatch = useDispatch();
    const  {gymnastics}  = useSelector(state => state.armoury);
    console.log(gymnastics);
  
    useEffect(() => {
      dispatch(fetchGymnasticsData());
    }, []);
    console.log(gymnastics);

  return (
    <div className='grid'>
    {gymnastics.map((e)=> (
        <div><img src={e.image} alt="" /></div>

    ))}
</div>
  )
}
