"use client";

import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workouts.type";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const PlanRemoveButton = ({ workout }: { workout: IWorkout }) => {
  const { plan, setPlan, setCompletedIds } = useContext(workoutContext);

  const handlePlanRemoveButton = () => {
    setPlan((prev) => prev.filter((item) => item.id !== workout.id));

    setCompletedIds((prev) => prev.filter((id) => id !== workout.id));

    toast.success(`Removed from today's plan`, { theme: "dark" });
  };

  return (
    <button
      aria-label="Remove workout"
      className="flex h-9 w-9 items-center justify-center rounded-full text-[#9CA3AF] transition hover:cursor-pointer hover:text-[#FB434C]"
      onClick={handlePlanRemoveButton}
    >
      <RxCross2 size={20} />
    </button>
  );
};

export default PlanRemoveButton;
