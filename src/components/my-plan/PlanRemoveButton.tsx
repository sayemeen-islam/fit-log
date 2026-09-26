"use client"
import { workoutContext } from '@/context/WorkoutProvider';
import { IWorkout } from '@/types/workouts.type';
import React, { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

const PlanRemoveButton = ({workout}:{workout:IWorkout}) => {
  const {plan,setPlan}=useContext(workoutContext)
  const handlePlanRemoveButton=(newWorkout:IWorkout)=>{
   
   const changedPlan=plan.filter((elem:IWorkout)=>elem.id!==newWorkout.id)
   setPlan([...changedPlan])
   toast.warning('Workout is removed')
  }
  return (
            <button
              aria-label="Remove workout"
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#9CA3AF] transition   hover:text-[#FB434C] hover:cursor-pointer"
            onClick={()=>handlePlanRemoveButton(workout)}>
              <RxCross2 size={20} />
            </button>
  );
};

export default PlanRemoveButton;