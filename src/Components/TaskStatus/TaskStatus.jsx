import React from 'react';

const TaskStatus = () => {
  return (
    <>
      <div className="shadow-lg p-4 bg-white rounded-xl mb-5">
        <h1 className="text-start mb-4 font-semibold text-lg md:text-xl px-3 md:px-0">Task Status</h1>
        <div className="mt-3 p-4 bg-[#bbdce568] rounded-xl">
          <p className="mb-2 font-semibold text-sm md:text-base">Login Issues - Can't Access Account</p>
          <button class="btn text-sm md:text-base w-full text-white bg-gradient-to-r from-[rgba(84,207,104,1)] to-[rgba(0,130,122,1)]">Complete</button>
        </div>
      </div>
    </>
  );
};

export default TaskStatus;
