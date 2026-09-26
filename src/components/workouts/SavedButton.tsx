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
      toast.error("Already saved", { theme: "dark" });
    } else {
      setSaved([...saved, workout]);
      toast.success("Saved for later", { theme: "dark" });
    }
  };

  return (
    <button
      className="flex items-center gap-1 rounded-xl border border-[#222630] bg-[#222630] px-4 py-1.5 text-white transition hover:border-[#9CA3AF] hover:bg-[#2D323D]"
      onClick={handleSavedButton}
    >
      <FaRegBookmark size={13}/> <span className="text-sm">Save for later</span>
    </button>
  );
};

export default SavedButton;
