import { workoutContext } from "@/context/WorkoutProvider";
import React, { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";
interface MarkAsDoneButtonProps {
  workoutId: number;
}
const MarkAsDoneButton = ({ workoutId }: MarkAsDoneButtonProps) => {
  const { completedIds, setCompletedIds } = useContext(workoutContext);
  const isMarked = completedIds.includes(workoutId);
  const handleMarkAsDone = () => {
    setCompletedIds((prev) => {
      if (prev.includes(workoutId)) {
        return prev.filter((id) => id !== workoutId);
      }

      return [...prev, workoutId];
    });

    if (!isMarked) {
      toast.success("Well done!", { theme: "dark" });
    }
  };
  return (
    <button
      className={`flex items-center gap-2 rounded-full bg-[#C2F800] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#c2f800c9] hover:cursor-pointer ${isMarked ? "btn-disabled" : ""}`}
      onClick={handleMarkAsDone}
    >
      <FaCheck />
      {isMarked ? " Done" : " Mark as Done"}
    </button>
  );
};

export default MarkAsDoneButton;
