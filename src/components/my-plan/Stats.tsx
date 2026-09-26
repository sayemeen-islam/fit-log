
import { IWorkout } from "@/types/workouts.type";
import React from "react";

const Stats = ({workouts}:{workouts:IWorkout[]}) => {


  const totalMinutes=workouts.reduce((total:number,workout:IWorkout)=>total+workout.duration,0)
  const totalCalories=workouts.reduce((total:number,workout:IWorkout)=>total+workout.caloriesBurned,0)
  return (
    <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3 p-5 rounded-xl border border-[#222630] bg-[#13161D]">
      {/* Exercises */}
      <div className=" ">
        <p className="text-sm text-[#9CA3AF]">Exercises</p>
        <p className="mt-2 text-3xl font-bold text-[#C2F800] heading">
          {workouts.length}
        </p>
      </div>

      {/* Minutes */}
      <div className="border-t border-[#222630] pt-5 sm:border-t-0 sm:border-l sm:border-[#222630] sm:pl-5">
        <p className="text-sm text-[#9CA3AF]">Minutes</p>
        <p className="mt-2 text-3xl font-bold text-white heading">{totalMinutes}</p>
      </div>

      {/* Calories */}
      <div className="border-t border-[#222630] pt-5 sm:border-t-0 sm:border-l sm:border-[#222630] sm:pl-5">
        <p className="text-sm text-[#9CA3AF] ">Calories</p>
        <p className="mt-2 text-3xl font-bold text-white heading">{totalCalories}</p>
      </div>
    </section>
  );
};

export default Stats;
