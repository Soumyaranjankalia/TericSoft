import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/action";

export const Home = () => {
  const dispatch = useDispatch();
  const  {armourydata}  = useSelector((state) => state.armourypageData);
  console.log(armourydata);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log(armourydata);

  return (
    <div>
        {armourydata.map((e)=> (
            <div><img src={e.image} alt="" /></div>
        ))}
    </div>
  )
};
