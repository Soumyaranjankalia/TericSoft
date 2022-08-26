import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchLakeandseaData } from "../Redux/action";


export const LakeandSea = () => {
  const dispatch = useDispatch();
  const  {lakeandsea}  = useSelector(state => state.armoury);
  console.log(lakeandsea);

  useEffect(() => {
    dispatch(fetchLakeandseaData());
  }, []);
  console.log(lakeandsea);

return (
  <div className='grid'>
  {lakeandsea.map((e)=> (
      <div><img src={e.image} alt="" /></div>

  ))}
</div>
)
}
