"use client";
import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workouts.type";
import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const SavedButton = ({ workout }: { workout: IWorkout }) => {
  const { saved, setSaved } = useContext(workoutContext);
  const handleSavedButton = () => {
       const foundWorkout = saved.find((elem: IWorkout) => elem.id === workout.id);
       if (foundWorkout) {
         toast.info("Already in saved plan")
       } else {
         setSaved([...saved, workout]);
         toast.success("Added to saved plan");
       }
  };

  return (
    <button
      className="btn  rounded-xl border border-[#222630] hover:border-[#9CA3AF] bg-transparent transition"
      onClick={handleSavedButton}
    >
      <FaRegBookmark /> Save for later
    </button>
  );
};

export default SavedButton;
