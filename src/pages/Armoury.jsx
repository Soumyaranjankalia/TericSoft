import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/action";

export const Armoury = () => {
  const dispatch = useDispatch();
  const  {armoury}  = useSelector(state => state.armoury);
  console.log(armoury);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log(armoury);

  return (
    <div>
        {armoury.map((e)=> (
            <div><img src={e.image} alt="" /></div>

        ))}
    </div>
  )
};