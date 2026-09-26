"use client";

import { IWorkout } from "@/types/workouts.type";
import React, { createContext, ReactNode, useState, useEffect } from "react";

interface IWorkoutContext {
  plan: IWorkout[];
  setPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  completedIds: number[];
  setCompletedIds: React.Dispatch<React.SetStateAction<number[]>>;
  isLoaded: boolean;
}

export const workoutContext = createContext<IWorkoutContext>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
  completedIds: [],
  setCompletedIds: () => {},
  isLoaded: false,
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);
  const [completedIds, setCompletedIds] = useState<number[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");
    const storedCompleted = localStorage.getItem("fitlog-completed");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    if (storedCompleted) {
      setCompletedIds(JSON.parse(storedCompleted));
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("fitlog-completed", JSON.stringify(completedIds));
  }, [completedIds, isLoaded]);

  const contextValue = {
    plan,
    setPlan,
    saved,
    setSaved,
    completedIds,
    setCompletedIds,
    isLoaded,
  };

  return (
    <workoutContext.Provider value={contextValue}>
      {children}
    </workoutContext.Provider>
  );
};

export default WorkoutProvider;
