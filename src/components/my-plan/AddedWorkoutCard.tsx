import { IWorkout } from "@/types/workouts.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";
import { PiFireSimpleFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import PlanCardButton from "./PlanRemoveButton";
import SavedCardButton from "./SavedRemoveButton";
import PlanRemoveButton from "./PlanRemoveButton";
import SavedRemoveButton from "./SavedRemoveButton";
import MarkAsDoneButton from "./MarkAsDoneButton";

interface IAddedWorkoutCardProps {
  workout: IWorkout;
  isSelected: `Today's Plan` | "Saved";
}
const AddedWorkoutCard = ({ workout, isSelected }: IAddedWorkoutCardProps) => {
  return (
    <article className="flex flex-col gap-5 rounded-2xl border border-[#222630] bg-[#1C1F26] p-4 lg:flex-row lg:items-center">
      {/* Thumbnail */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-56 lg:h-32 lg:w-48">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover "
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h2 className="text-lg font-bold tracking-wide uppercase text-white">
          {workout.name}
        </h2>

        <p className="mt-1 text-sm text-[#9CA3AF]">{workout.equipment}</p>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#9CA3AF]">
          <span className="flex items-center gap-1.5">
            <IoTimeOutline size={16} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <PiFireSimpleFill size={16} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5">
            <MdOutlineStarOutline size={16} />
            {workout.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-2 lg:justify-end">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-[#374151] px-4 py-2 text-sm font-medium text-white transition hover:border-[#9CA3AF] bg-transparent"
        >
          View Details
        </Link>

        <MarkAsDoneButton></MarkAsDoneButton>

        {isSelected === `Today's Plan` ? (
          <PlanRemoveButton workout={workout}></PlanRemoveButton>
        ) : (
          <SavedRemoveButton workout={workout}></SavedRemoveButton>
        )}
      </div>
    </article>
  );
};

export default AddedWorkoutCard;
