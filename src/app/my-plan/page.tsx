"use client";
import AddedWorkoutCard from "@/components/my-plan/AddedWorkoutCard";
import Stats from "@/components/my-plan/Stats";
import Metrics from "@/components/my-plan/Stats";
import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workouts.type";
import Link from "next/link";
import { useContext, useState } from "react";

const MyPlanPage = () => {
  const { plan, saved } = useContext(workoutContext);
  const [isSelected, setIsSelected] = useState<`Today's Plan` | "Saved">(
    `Today's Plan`,
  );
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

      {/* Workout List */}
      {isSelected === "Today's Plan" ? (
        plan.length > 0 ? (
          <section className="space-y-4">
            {/* Workout Card */}
            {plan.map((workout: IWorkout) => (
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
      ) : saved.length > 0 ? (
        <section className="space-y-4">
          {/* Workout Card */}
          {saved.map((workout: IWorkout) => (
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
