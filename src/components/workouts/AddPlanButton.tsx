"use client";
import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workouts.type";
import React, { useContext } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import { toast } from "react-toastify";

const AddPlanButton = ({ workout }: { workout: IWorkout }) => {
  const { plan, setPlan } = useContext(workoutContext);
  const handleAddPlanButton = () => {
    const foundWorkout = plan.find((elem: IWorkout) => elem.id === workout.id);
    if (foundWorkout) {
      toast.error("Already in your plan", { theme: "dark" });
    } else {
      setPlan([...plan, workout]);
      toast.success("Added to today's plan", { theme: "dark" });
    }
  };

  return (
    <button
      className=" flex items-center justify-center gap-1 px-4 py-2 rounded-xl bg-[#C2F800] text-[#0C0D10] hover:bg-[#c2f800c4]"
      onClick={handleAddPlanButton}
    >
      <LuCalendarPlus2 /> <span>Add to today&apos;s plan</span>
    </button>
  );
};

export default AddPlanButton;
