import React from "react";
import { Routes, Route } from "react-router-dom";
import { Aquatics } from "../pages/Aquatics";
import { Armoury } from "../pages/Armoury";
import { Cycling } from "../pages/Cycling";
import { Equestrian } from "../pages/Equestrian";
import { Extreme } from "../pages/Extreme";
import { Golf } from "../pages/Golf";
import { Gymnastics } from "../pages/Gymnastics";
import { LakeandSea } from "../pages/LakeandSea";
import { Home } from "./Home";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/armoury" element={<Armoury />}></Route>
        <Route path="/aquatics" element={<Aquatics />}></Route>
        <Route path="/cycling" element={<Cycling />}></Route>
        <Route path="/equestrian" element={<Equestrian />}></Route>
        <Route path="/extreme" element={<Extreme />}></Route>
        <Route path="/golf" element={<Golf />}></Route>
        <Route path="/gymnastics" element={<Gymnastics/>}></Route>
        <Route path="/lakeandsea" element={<LakeandSea />}></Route>
      </Routes>
    </div>
  );
};
