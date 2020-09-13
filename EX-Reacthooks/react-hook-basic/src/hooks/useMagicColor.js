import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

function randomColor(currentColor) {
  const COLOR_LISTS = ["red", "green", "blue"];
  let currentIndex = COLOR_LISTS.indexOf(currentColor);
  let newIndex = currentIndex;
  while (newIndex === currentIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }

  console.log(COLOR_LISTS[newIndex]);

  return COLOR_LISTS[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("green");
  const currentColorRef = useRef("green");
  useEffect(() => {
    const colorInterval = setInterval(() => {
      let newColor = randomColor(currentColorRef.current);
      setColor(newColor);
      currentColorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  });

  return color;
}

export default useMagicColor;
