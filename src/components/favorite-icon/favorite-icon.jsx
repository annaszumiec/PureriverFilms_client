import { MdOutlineFavoriteBorder } from "react-icons/md";
import React, { useState } from "react";


export const FavoriteIcon = ({movieID}) => {
 

const [active, setActive] = useState(false);

const user =JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('token');

 const handleClick =() => {

  fetch(
    `https://pureriverfilms.herokuapp.com/users/${user.Username}/movies/${movieID}`,
    {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      if (response.ok) {
        alert("Added to favorites") 
        setActive(!active)
        console.log('addFavorites')
        
      } else {
        alert('Something went wrong');
      }
    })
    .catch((error) => {
      console.log(error);
    });

    
    fetch(
      `https://pureriverfilms.herokuapp.com/users/${user.Username}/movies/${movieID}`,
      {
        method: 'DELETE',
        body: JSON.stringify({}),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        if (response.ok) {
          alert("Remove from favorites") 
          setActive(active)
          console.log('removeFavorites')
          
        } else {
          alert('Something went wrong');
        }
      })
      .catch((error) => {
        console.log(error);
      });

 }







  return (
    <div onClick={handleClick}
    style={{ marginTop: "10px", float: "right", color: "A8ADA4", color: active ? "#E02232" : "A8ADA4"  }}>
    <MdOutlineFavoriteBorder size={"1.5rem"} />
    </div>
   
  );
};