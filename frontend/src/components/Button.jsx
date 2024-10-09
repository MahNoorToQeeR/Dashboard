import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
  onClick, // Add onClick prop
}) => {
  const { setIsClicked, initialState } = useStateContext();

  const handleClick = () => {
    // Call the provided onClick function, if any
    if (onClick) onClick();
    
    // Reset the clicked state
    setIsClicked(initialState);
  };

  return (
    <button
      type="button"
      onClick={handleClick} // Use the new handleClick function
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
