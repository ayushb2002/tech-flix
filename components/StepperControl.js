import React from "react";

const StepperControl = () => {
  return (
    <div>
      {/* Stepper */}
      <div className="container flex justify-around mt-4 mb-8">
        {/* Back Button */}
        <button className="px-4 py-2 font-semibold text-red-500 uppercase transition duration-200 ease-in-out border-2 border-red-500 cursor-pointer rounded-xl hover:bg-red-500 hover:text-white">
          Back
        </button>
        {/* Next Button */}
        <button className="px-4 py-2 font-semibold text-white uppercase transition duration-200 ease-in-out bg-red-500 cursor-pointer rounded-xl hover:text-red-500 hover:bg-transparent hover:border-red-500 hover:border-2">
          Next
        </button>
      </div>
    </div>
  );
};

export default StepperControl;
