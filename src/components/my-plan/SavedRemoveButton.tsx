import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workouts.type";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const SavedRemoveButton = ({ workout }: { workout: IWorkout }) => {
  const { saved, setSaved } = useContext(workoutContext);
  const handleSavedRemoveButton = (newWorkout: IWorkout) => {
    const changedSave = saved.filter(
      (elem: IWorkout) => elem.id !== newWorkout.id,
    );
    setSaved([...changedSave]);
    toast.success("Removed from saved workouts", { theme: "dark" });
  };

  return (
    <button
      aria-label="Remove workout"
      className="flex h-9 w-9 items-center justify-center rounded-full text-[#9CA3AF] transition   hover:text-[#FB434C] hover:cursor-pointer"
      onClick={() => handleSavedRemoveButton(workout)}
    >
      <RxCross2 size={20} />
    </button>
  );
};

export default SavedRemoveButton;
