import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useState, useEffect } from "react";



export const FavoriteIcon = ({movieID}) => {
 

const [active, setActive] = useState(false);

const user =JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('token');

 const handleClick =() => {

 if(!active)
{
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
        setActive(!active);
        user.FavoriteMovies.push(movieID);
       localStorage.setItem("user", JSON.stringify(user))
        
      } else {
        alert('Something went wrong');
      }
    })
    .catch((error) => {
      console.log(error);
    });

  }
  else {
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
          setActive(active);
          user.FavoriteMovies = user.FavoriteMovies.filter(
            (movieId) => movieId == movieID
          );
          localStorage.setItem("user", JSON.stringify(user));
         
        } else {
          alert('Something went wrong');
        }
      })
      .catch((error) => {
        console.log(error);
      });

    }
 }

 useEffect (() => {
  const favMovies = user.FavoriteMovies;
  if (favMovies && favMovies.length > 0) {
    const match = favMovies.find((movieId) => movieId === movieID);
    if (match) {
      setActive(true);
    }
  }
 })



  return (
    <div onClick={handleClick}
    style={{ marginTop: "10px", float: "right", color: "A8ADA4", color: active ? "#E02232" : "A8ADA4"  }}>
    <MdOutlineFavoriteBorder size={"1.5rem"} />
    </div>
   
  );
};