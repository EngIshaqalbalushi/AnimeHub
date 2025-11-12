import React from "react";
import "./LoadingSpinner.scss";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "accent" | "white";
  text?: string;
  overlay?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  color = "primary",
  text,
  overlay = false,
  className = "",
}) => {
  const spinnerClasses = [
    "loading-spinner",
    `loading-spinner--${size}`,
    `loading-spinner--${color}`,
    overlay ? "loading-spinner--overlay" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={spinnerClasses}>
      <div className="loading-spinner__container">
        <div className="loading-spinner__spinner">
          <div className="loading-spinner__circle"></div>
          <div className="loading-spinner__circle"></div>
          <div className="loading-spinner__circle"></div>
          <div className="loading-spinner__circle"></div>
        </div>
        {text && <div className="loading-spinner__text">{text}</div>}
      </div>
    </div>
  );
};

export default LoadingSpinner;
