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
      toast.info("Already in today's plan")
    } else {
      setPlan([...plan, workout]);
      toast.success("Added to today's plan");
    }
  };

  return (
    <button
      className="btn  rounded-xl bg-[#C2F800] text-[#0C0D10] hover:bg-[#c2f800c4]"
      onClick={handleAddPlanButton}
    >
      <LuCalendarPlus2 /> Add to today&apos;s plan
    </button>
  );
};

export default AddPlanButton;
