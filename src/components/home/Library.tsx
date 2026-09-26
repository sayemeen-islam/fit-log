import { getAllWorkouts } from "@/lib/Workout";
import { IWorkout } from "@/types/workouts.type";
import React from "react";
import WorkoutCard from "./WorkoutCard";
import Link from "next/link";

const Library = async () => {
  const data = await getAllWorkouts();

  return (
    <section id="library" className="w-full max-w-7xl mx-auto px-4 mt-15 mb-18">
      <h2 className="text-2xl heading md:text-3xl xl:text-4xl font-bold tracking-tight ">
        THE LIBRARY
      </h2>
      <p className="text-[#9CA3AF] text-sm tracking-normal sm:text-[16px]">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {data.map((workout: IWorkout) => {
          // <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>
          return (
            <Link
              key={workout.id}
              href={`/workouts/${workout.id}`}
              className="hover:border border-[#9CA3AF] rounded-2xl"
            >
              <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Library;
