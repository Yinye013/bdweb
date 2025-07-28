import "./ShinyText.css";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <button
      className={`shiny-text ${
        disabled ? "disabled" : ""
      } ${className} cursor-pointer`}
      style={{ animationDuration }}
    >
      {text}
    </button>
  );
};

export default ShinyText;
