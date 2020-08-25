import React from "react";
import { useState } from "react";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function getRandomColor() {
  const colorList = ["deeppink", "red", "green", "blue"];
  const randomIndex = Math.trunc(Math.random() * 4);
  return colorList[randomIndex];
}

function ColorBox(props) {
  const [color, setColor] = useState(() => {
    const initialColor = localStorage.getItem("box_color") || "deeppink";
    return initialColor;
  });

  function handleColor() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleColor}
    >
      Color Box
    </div>
  );
}

export default ColorBox;
