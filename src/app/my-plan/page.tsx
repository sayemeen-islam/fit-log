"use client";
import AddedWorkoutCard from "@/components/my-plan/AddedWorkoutCard";
import Stats from "@/components/my-plan/Stats";
import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workouts.type";
import Link from "next/link";
import { useContext, useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

const MyPlanPage = () => {
  const { plan, saved } = useContext(workoutContext);
  const [isSelected, setIsSelected] = useState<`Today's Plan` | "Saved">(
    `Today's Plan`,
  );
  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">(
    "Duration",
  );

  const sortWorkouts = (workouts: IWorkout[]) => {
    const sortedWorkouts = [...workouts];
    if (sortBy === "Duration") {
      sortedWorkouts.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "Calories") {
      sortedWorkouts.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    } else {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }
    return sortedWorkouts;
  };
  const sortedPlan = sortWorkouts(plan);
  const sortedSaved = sortWorkouts(saved);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 mb-6 ">
      {/* Page Header */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          MY PLAN
        </h1>

        <p className="mt-2 text-sm text-[#9CA3AF] sm:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </section>

      {/* Metrics Summary */}
      {isSelected === "Today's Plan" ? (
        <Stats workouts={plan}></Stats>
      ) : (
        <Stats workouts={saved}></Stats>
      )}

      {/* Tabs */}
      <div className="flex justify-between">
        <div className="mb-6 rounded-xl inline-block gap-2 border bg-[#13161D] border-[#222630] p-1">
          <button
            className={`rounded-xl px-4 py-2 text-sm  ${isSelected === "Today's Plan" ? "text-white font-semibold bg-[#1C1F26] border-2 border-[#222630]" : "font-normal text-[#9CA3AF]"}`}
            onClick={() => setIsSelected("Today's Plan")}
          >
            {`Today's Plan`}
          </button>
          <button
            className={`rounded-xl px-4 py-2 text-sm  ${isSelected === "Saved" ? "text-white font-semibold bg-[#1C1F26]  border-2 border-[#222630]" : "font-normal text-[#9CA3AF]"}`}
            onClick={() => setIsSelected("Saved")}
          >
            {"Saved"}
          </button>
        </div>
        <div className="mt-2 mb-6 flex items-center ">
          <p className="min-w-[60px] text-sm font-medium text-[#9CA3AF]">
            Sort By
          </p>

          <div className="relative ">
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value as "Duration" | "Calories" | "Rating");
              }}
              className="w-full appearance-none rounded-lg border border-[#222630] bg-[#13161D] px-4 py-2.5 pr-10 text-sm text-[#9CA3AF] outline-none "
            >
              <option
                className="hover:bg-[#13161D] text-[#9CA3AF]"
                value="Duration"
              >
                Duration
              </option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>

            <IoChevronDownSharp className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#9CA3AF]" />
          </div>
        </div>
      </div>

      {/* Workout List */}
      {isSelected === "Today's Plan" ? (
        sortedPlan.length > 0 ? (
          <section className="space-y-4">
            {/* Workout Card */}
            {sortedPlan.map((workout: IWorkout) => (
              <AddedWorkoutCard
                key={workout.id}
                workout={workout}
                isSelected={isSelected}
              ></AddedWorkoutCard>
            ))}
          </section>
        ) : (
          <section className=" flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-[#222630]  px-6 text-center ">
            <h2 className="text-xl font-bold tracking-wide text-white">
              NOTHING HERE YET
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-[#9CA3AF]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 rounded-lg bg-[#C2F800] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#d2ff33]"
            >
              Go to workouts
            </Link>
          </section>
        )
      ) : sortedSaved.length > 0 ? (
        <section className="space-y-4">
          {/* Workout Card */}
          {sortedSaved.map((workout: IWorkout) => (
            <AddedWorkoutCard
              key={workout.id}
              workout={workout}
              isSelected={isSelected}
            ></AddedWorkoutCard>
          ))}
        </section>
      ) : (
        <section className=" flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-[#222630]  px-6 text-center ">
          <h2 className="text-xl font-bold tracking-wide text-white">
            NOTHING HERE YET
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-[#9CA3AF]">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="mt-6 rounded-lg bg-[#C2F800] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#d2ff33]"
          >
            Go to workouts
          </Link>
        </section>
      )}
    </main>
  );
};

export default MyPlanPage;
