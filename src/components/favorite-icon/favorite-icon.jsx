
import { MdOutlineFavoriteBorder } from "react-icons/md";
import React, { useState } from "react";



export const FavoriteIcon = () => {
 

const [active, setActive] = useState(false);
 const handleClick =() => {

  alert("Added to favorites") 
  setActive(!active)
  console.log('addFavorites')


 }

  return (
    <div onClick={handleClick}
    style={{ marginTop: "10px", float: "right", color: "A8ADA4", color: active ? "#E02232" : "A8ADA4"  }}>
    <MdOutlineFavoriteBorder size={"1.5rem"} />
    </div>
  );
};