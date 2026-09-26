"use client";

import { IWorkout } from "@/types/workouts.type";
import React, { createContext, ReactNode, useState } from "react";

interface IWorkoutContext {
  plan: IWorkout[];
  setPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  completedIds: number[];
  setCompletedIds: React.Dispatch<React.SetStateAction<number[]>>;
}

export const workoutContext = createContext<IWorkoutContext>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
  completedIds: [],
  setCompletedIds: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);
  const [completedIds, setCompletedIds] = useState<number[]>([]);

  const contextValue = {
    plan,
    setPlan,
    saved,
    setSaved,
    completedIds,
    setCompletedIds,
  };

  return (
    <workoutContext.Provider value={contextValue}>
      {children}
    </workoutContext.Provider>
  );
};

export default WorkoutProvider;
