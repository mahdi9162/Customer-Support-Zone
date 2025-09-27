import React from 'react';

const TaskStatus = () => {
  const showText = () => {};

  return (
    <>
      <div className="h-44 shadow-lg p-4 bg-white rounded-xl mb-5">
        <h1 className="text-start mb-4 font-semibold text-lg md:text-xl px-3 md:px-0">Task Status</h1>
        {showText()}
      </div>
    </>
  );
};

export default TaskStatus;

// <div className="mt-3 p-4 bg-[#bbdce568] rounded-xl">
//   <p className="mb-2 font-semibold text-sm md:text-base">Login Issues - Can't Access Account</p>
//   <button class="btn text-sm md:text-base w-full text-white bg-gradient-to-r from-[rgba(84,207,104,1)] to-[rgba(0,130,122,1)]">
//     Complete
//   </button>
// </div>

// <div className='flex flex-col items-center mt-10'>
//   <p className='text-gray-500 font-semibold'>No Tasks In Progress!</p>
//   <p className='text-gray-400'>Click on a ticket to start working😉</p>
// </div>
