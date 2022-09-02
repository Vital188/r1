import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Joke from "./Joke";

function Jokes({color, color1, color2}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.jokes);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <>
      {items.map((item, index) => (
        <Joke style={{ color: color }} 
        key={item.index} joke={item.joke}></Joke>
      ))}
      {items.map((item, index) => (
        <Joke style={{ color: color1 }}
        key={item.index} setup={item.setup}></Joke>
      ))}
      {items.map((item, index) => (
        <Joke style={{ color: color2 }} key={item.index} delivery={item.delivery}></Joke>
      ))}
    </>
  );
}

export default Jokes;
