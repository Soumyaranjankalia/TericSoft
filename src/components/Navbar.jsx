import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FontawsomeIcons";
import { Link, useNavigate } from "react-router-dom";
import { Armoury } from "../pages/Armoury";

export const Navbar = () => {
  let navigate = useNavigate(); 
  return (
    <div className="nav-icon">
      <Link to={"/"}>
      <div>
        <FontAwesomeIcon className="icon" icon="star"  />
        <p>Featured</p>
      </div>
      </Link>
      <Link to={"/armoury"}>
      <div>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-person-rifle" />
        <p>Armoury</p>
      </div>
      </Link>
      <Link to={"/aquatics"}>
      <div>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-person-swimming" />
        <p>Aquatics</p>
      </div>
      </Link>
      <Link to={"/cycling"}>
      <div>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-person-biking" />
        <p>Cycling</p>
      </div>
      </Link>
      <Link to={"/equestrian"}>
      <div>
      <FontAwesomeIcon className="icon" icon="fa-solid fa-horse-head" />
      <p>Equestrian</p>
      </div>
      </Link>
      <Link to={"/extreme"}>
      <div>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-person-skiing" />
        <p>Extreme</p>
      </div>
      </Link>
      <Link to={"/golf"}>
      <div>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-golf-ball-tee" />
        <p>Golf</p>
      </div>
      </Link>
      <Link to={"/gymnastics"}>
      <div>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-dumbbell" />
        <p>Gymnastics</p>
      </div>
      </Link>
      <Link to={"/lakeandsea"}>
      <div>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-water" />
        <p>Lake & Sea</p>
      </div>
      </Link>
    </div>
  );
};
