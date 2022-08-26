import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FontawsomeIcons";

export const Navbar = () => {
  return (
    <div className="nav-icon">
      <div>
        <FontAwesomeIcon className="icon" icon="star" />
        <p>Featured</p>
      </div>
      <div>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-person-rifle" />
        <p>Armoury</p>
      </div>
      <div>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-person-swimming" />
        <p>Aquatics</p>
      </div>
      <div>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-person-biking" />
        <p>Cycling</p>
      </div>
      <div>
      <FontAwesomeIcon className="icon" icon="fa-solid fa-horse-head" />
      <p>Equestrian</p>
      </div>
      <div>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-person-skiing" />
        <p>Extreme</p>
      </div>
      <div>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-golf-ball-tee" />
        <p>Golf</p>
      </div>
      <div>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-dumbbell" />
        <p>Gymnastics</p>
      </div>
      <div>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-water" />
        <p>Lake & Sea</p>
      </div>
    </div>
  );
};
