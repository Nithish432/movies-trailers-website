import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("");
  // Inside return -> JSX
  const styles = {
    background: color,
    width: "250px",
  };

  const [colorList, setColorList] = useState([
    "crimson",
    "orange",
    "skyblue",
    "purple",
  ]);

  return (
    <div className="color-game">
      <input
        type="text"
        style={styles}
        placeholder="Name"
        onChange={(event) => setColor(event.target.value)} />
      {/* copy the colorList and add the newColor to it */}
      <button onClick={() => setColorList([...colorList, color])}>
        Add Color
      </button>
      {/* <p>Color: {color}</p> */}
      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}
