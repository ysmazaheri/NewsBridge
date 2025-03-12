import { useState, useEffect, useRef } from "react";

function getColor(rating: number): string {
  const red = Math.min(255, (rating / 100) * 255);
  const blue = 255 - red;
  return `rgb(${red}, 0, ${blue})`;
}

interface NewsBridgeBiasScaleProps {
  // This rating value is in range [0,100]
  rating: number;
}

export const NewsBridgeBiasScale = (props: NewsBridgeBiasScaleProps) => {
  const { rating } = props;
  const circlePosition = `${rating}%`;

  const color = getColor(rating);
  // The circle's border color is dynamic based on its position

  return (
    <div className="relative w-full h-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-full">
      <div
        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md"
        style={{
          left: circlePosition,
          border: "2px solid",
          borderColor: color,
          opacity: 0.7,
        }}
      />
    </div>
  );
};

interface UserBiasScaleProps {
  initialRating: number;
  onChange: (rating: number) => void;
  // This onChange function will be used to send the rating to the backend
}

export const UserBiasScale = (props: UserBiasScaleProps) => {
  const { initialRating, onChange } = props;
  const [dragging, setDragging] = useState<boolean>(false);
  const [currentRating, setCurrentRating] = useState<number>(initialRating);
  const scaleRef = useRef<HTMLDivElement>(null);

  const color = getColor(currentRating);

  // Update rating based on mouse position (moving slider)
  const updateRating = (clientX: number) => {
    if (!scaleRef.current) return;

    const scaleRect = scaleRef.current.getBoundingClientRect();
    const mousePosition = clientX - scaleRect.left;
    const newRating = Math.min(
      Math.max(0, (mousePosition / scaleRect.width) * 100),
      100
    );
    setCurrentRating(newRating);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dragging) updateRating(e.clientX);
    };
    // Calls onChange function when dragging stops
    // To Do: Implement onChange function to update backend with new rating
    const handleMouseUp = () => {
      if (dragging) {
        setDragging(false);
        onChange(currentRating);
      }
    };

    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, currentRating, onChange]);

  return (
    <div
      ref={scaleRef} // Reference to this specific bias scale component
      className="relative w-full h-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"
    >
      <div
        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md cursor-pointer hover:scale-105"
        style={{
          left: `${currentRating}%`,
          border: "2px solid",
          borderColor: color,
        }}
        onMouseDown={() => setDragging(true)}
        // Only considered "dragging" if circle was clicked
      />
    </div>
  );
};
