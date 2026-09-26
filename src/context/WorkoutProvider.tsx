"use client";
import { IWorkout } from "@/types/workouts.type";
import React, { createContext, ReactNode, useState } from "react";

interface IWorkoutContext {
  plan: IWorkout[];
  setPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const workoutContext = createContext<IWorkoutContext>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  const contextValue = {
    plan,
    setPlan,
    saved,
    setSaved,
  };

  return (
    <workoutContext.Provider value={contextValue}>
      {children}
    </workoutContext.Provider>
  );
};

export default WorkoutProvider;
