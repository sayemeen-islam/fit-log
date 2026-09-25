"use client"
import { workoutContext } from '@/context/WorkoutProvider';
import { IWorkout } from '@/types/workouts.type';
import React, { useContext } from 'react';
import { LuCalendarPlus2 } from 'react-icons/lu';

const AddPlanButton = ({workout}:{workout:IWorkout}) => {
  const {plan,setPlan}=useContext(workoutContext)
  const handleAddPlanButton=()=>{
    
     setPlan([...plan,workout])
     
  }

  return (
      <button className="btn  rounded-xl bg-[#C2F800] text-[#0C0D10] hover:bg-[#c2f800c4]" onClick={handleAddPlanButton}>
        <LuCalendarPlus2 /> Add to today&apos;s plan
      </button>
  );
};

export default AddPlanButton;