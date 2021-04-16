import React, { useState, useEffect } from "react";

export default function RandomNumber() {
  const [number, setNumber] = useState(20);

  useEffect(() => {
    const interval = setInterval(
      () => setNumber(Math.floor(Math.random() * 20 + 1)),
      3000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <a>{number}</a>;
}
