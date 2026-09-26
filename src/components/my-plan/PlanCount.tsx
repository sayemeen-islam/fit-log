"use client";
import { workoutContext } from "@/context/WorkoutProvider";
import React, { useContext } from "react";
const PlanCount = () => {
  const { plan, isLoaded } = useContext(workoutContext);
  return (
    <span className="flex min-w-7 items-center justify-center rounded-full bg-[#C2F800] px-2 text-black">
      {" "}
      {isLoaded ? plan.length : "0"}{" "}
    </span>
  );
};
export default PlanCount;
