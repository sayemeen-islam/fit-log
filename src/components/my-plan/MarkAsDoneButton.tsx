import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const MarkAsDoneButton = () => {
  const [isMarked, setIsMarked] = useState(false);
  const handleMarkAsDone = () => {
    setIsMarked(!isMarked);
    !isMarked && toast.success("Well done!");
  };
  return (
    <button
      className="flex items-center gap-2 rounded-full bg-[#C2F800] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#c2f800c9] hover:cursor-pointer"
      onClick={handleMarkAsDone}
    >
      <FaCheck />
      {isMarked ? " Done" : " Mark as Done"}
    </button>
  );
};

export default MarkAsDoneButton;
