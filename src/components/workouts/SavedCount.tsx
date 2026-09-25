"use client";
import { workoutContext } from "@/context/WorkoutProvider";
import React, { useContext } from "react";

const SavedCount = () => {
  const { saved } = useContext(workoutContext);
  return (
    <span className="flex min-w-7 items-center justify-center rounded-full border border-[#2D313B] px-2 text-white">
      {saved.length}
    </span>
  );
};

export default SavedCount;
