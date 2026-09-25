import { IWorkout } from "@/types/workouts.type";
import Image from "next/image";
import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";
import { PiFireSimpleFill } from "react-icons/pi";

interface IWorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#222630] bg-[#1C1F26]">
      {/* Image */}
      <div className="relative aspect-[16/10]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((category) => (
            <span
              key={category}
              className="badge rounded-full text-black bg-[#C2F800] px-3 py-1 text-xs font-semibold"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Workout name */}
        <h2 className=" text-[18px] text-lg font-bold heading">{workout.name}</h2>

        {/* Equipment */}
        <p className="mb-4 text-sm text-[#9CA3AF]">{workout.equipment}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-[#9CA3AF] pt-1.5 border-t border-[#20242E]">
          <span className="flex items-center gap-1">
            <IoTimeOutline />
            <span>{workout.duration} min</span>
          </span>
          <span className="flex items-center gap-1">
            <PiFireSimpleFill />
            <span>{workout.caloriesBurned} kcal</span>
          </span>
          <span className="flex items-center gap-1"><MdOutlineStarOutline /><span>{workout.rating}</span></span>
        </div>
      </div>
    </article>
  );
};

export default WorkoutCard;
