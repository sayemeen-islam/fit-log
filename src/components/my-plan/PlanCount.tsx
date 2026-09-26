"use client";
import { workoutContext } from "@/context/WorkoutProvider";
import React, { useContext } from "react";

const PlanCount = () => {
  const {plan}=useContext(workoutContext)
  return (
    <span className="flex min-w-7 items-center justify-center rounded-full bg-[#C2F800] px-2 text-black">
      {plan.length}
    </span>
  );
};

export default PlanCount;
