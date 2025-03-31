import { useState, useEffect, useRef } from "react";
import { Button } from "./FormElements";
import { useUserInteractions } from "../context/UserInteractionContext";

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
  articleId: number;
  // This onChange function will be used to send the rating to the backend
}

export const UserBiasScale = (props: UserBiasScaleProps) => {
  const { articleId } = props;
  const { userBiasRatings, addBiasRating } = useUserInteractions();
  const initialRating = userBiasRatings[props.articleId] || 50;
  const [dragging, setDragging] = useState<boolean>(false);
  const [isMutable, setIsMutable] = useState<boolean>(true);
  const [currentRating, setCurrentRating] = useState<number>(initialRating);
  const scaleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setCurrentRating(initialRating);
  }, [initialRating]);

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
  }, [dragging]);

  // Updates the state of the toggle button
  const handleClick = () => {
    if (isMutable) {
      addBiasRating(articleId, currentRating); 
    }
    setIsMutable(!isMutable);
  };

  return (
    <div>
      <div
        ref={scaleRef} // Reference to this specific bias scale component
        className="relative w-full h-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"
      >
        <div
          className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md
            ${
              isMutable
                ? "hover:scale-105 cursor-pointer"
                : "opacity-70 cursor-not-allowed"
            }`}
          style={{
            left: `${currentRating}%`,
            border: "2px solid",
            borderColor: color,
          }}
          onMouseDown={() => isMutable && setDragging(true)}
          // Only considered "dragging" if circle was clicked
        />
      </div>
      <div className="flex justify-center mt-6">
        <Button
          value={isMutable ? "Submit Rating" : "Adjust Rating"}
          width={120}
          height="h-8"
          bgColor={color}
          handleClick={handleClick}
        ></Button>
      </div>
    </div>
  );
};
