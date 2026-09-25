"use client";
import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workouts.type";
import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";

const SavedButton = ({ workout }: { workout: IWorkout }) => {
  const { saved, setSaved } = useContext(workoutContext);
  const handleSavedButton = () => {
    setSaved([...saved, workout]);
  };

  return (
    <button
      className="btn  rounded-xl border border-[#222630] hover:border-[#9CA3AF] bg-transparent"
      onClick={handleSavedButton}
    >
      <FaRegBookmark /> Save for later
    </button>
  );
};

export default SavedButton;
