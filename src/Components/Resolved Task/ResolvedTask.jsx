import React from 'react';
import { BiBold } from 'react-icons/bi';
import { FaBold } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc';

const ResolvedTask = () => {
  return (
    <>
      <div className="shadow-lg p-4 bg-white rounded-xl">
        <h1 className="text-start mb-4 font-semibold text-lg md:text-xl px-3 md:px-0">Resolved Task</h1>
        <div className="mt-3 p-4 bg-[#bbdce568] rounded-xl">
          <p className="mb-2 font-semibold text-sm md:text-base">Login Issues - Can't Access Account</p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <FcCheckmark size={20}/> 
              <p>Completed</p>
            </div>
            <button class="btn text-sm md:text-base text-white bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1))]">Click To Remove</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResolvedTask;
