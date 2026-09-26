import AddPlanButton from "@/components/workouts/AddPlanButton";
import SavedButton from "@/components/workouts/SavedButton";
import { getAllWorkouts } from "@/lib/Workout";
import { IWorkout } from "@/types/workouts.type";
import Image from "next/image";
import React from "react";

interface IWorkoutDetailsProps {
  params: Promise<{ id: string }>;
}
const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsProps) => {
  const { id } = await params;
  const data = await getAllWorkouts();
  const workout = data.find((workout: IWorkout) => id === String(workout.id));
  console.log(workout, "from workout details page");

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2 px-4 pt-12 pb-24 ">
      {/* Left — Visual */}
      <div className="relative min-h-[400px] overflow-hidden rounded-2xl border border-[#222630] bg-[#1C1F26] lg:min-h-[700px]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Right — Details */}
      <div className="flex flex-col">
        {/* Title + description */}
        <h1 className="text-3xl font-bold uppercase sm:text-4xl heading">
          {workout.name}
        </h1>

        <p className="mt-4 leading-7 text-[#9CA3AF]">{workout.description}</p>

        {/* Category tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {workout.muscleGroups.map((category) => (
            <span
              key={category}
              className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-semibold text-[#0F1115]"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Key Specs */}
        <div className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-[#222630]">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-[#222630]">
                  <td className="px-4 py-3 text-xs font-medium text-[#9CA3AF]">
                    EQUIPMENT
                  </td>
                  <td className="px-4 py-3 text-right text-sm">
                    {workout.equipment}
                  </td>
                </tr>

                <tr className="border-b border-[#222630]">
                  <td className="px-4 py-3 text-xs font-medium text-[#9CA3AF]">
                    DIFFICULTY
                  </td>
                  <td className="px-4 py-3 text-right text-sm">
                    {workout.difficulty}
                  </td>
                </tr>

                <tr className="border-b border-[#222630]">
                  <td className="px-4 py-3 text-xs font-medium text-[#9CA3AF]">
                    SETS
                  </td>
                  <td className="px-4 py-3 text-right text-sm">
                    {workout.sets}
                  </td>
                </tr>

                <tr className="border-b border-[#222630]">
                  <td className="px-4 py-3 text-xs font-medium text-[#9CA3AF]">
                    REPS
                  </td>
                  <td className="px-4 py-3 text-right text-sm">
                    {workout.reps}
                  </td>
                </tr>

                <tr className="border-b border-[#222630]">
                  <td className="px-4 py-3 text-xs font-medium text-[#9CA3AF]">
                    DURATION
                  </td>
                  <td className="px-4 py-3 text-right text-sm">
                    {workout.duration} min
                  </td>
                </tr>

                <tr className="border-b border-[#222630]">
                  <td className="px-4 py-3 text-xs font-medium text-[#9CA3AF]">
                    CALORIES
                  </td>
                  <td className="px-4 py-3 text-right text-sm">
                    {workout.caloriesBurned} kcal
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 text-xs font-medium text-[#9CA3AF]">
                    RATING
                  </td>
                  <td className="px-4 py-3 text-right text-sm">
                    {workout.rating}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Instructions */}
        <div className="mt-8">
          <h2 className="mb-4 text-md font-semibold tracking-widest text-white">
            INSTRUCTIONS
          </h2>

          <ol className="space-y-4">
            {workout.instructions.map((instruction, index) => (
              <li key={index} className="flex gap-4">
                <span className=" text-[#D1D5DB]">
                  {String(index + 1).padEnd(2, ".")}
                </span>

                <p className="text-sm leading-6 text-[#D1D5DB]">
                  {instruction}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <AddPlanButton workout={workout}></AddPlanButton>

          <SavedButton workout={workout}></SavedButton>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
