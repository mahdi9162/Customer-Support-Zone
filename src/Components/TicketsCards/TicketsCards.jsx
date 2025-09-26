import React from 'react';
import { IoCalendar } from 'react-icons/io5';

const TicketsCards = ({ issue }) => {
  return (
    <>
      <div className="p-4 shadow-md rounded-xl bg-white">
        <div className="flex justify-between items-center">
          <h2>Login Issues - Can't Access Account</h2>
          <p className="py-1 px-3 bg-[#B9F8CF] rounded-2xl text-sm flex items-center gap-1">
            <span className="w-4 h-4 rounded-full bg-green-500 inline-block"></span>Open
          </p>
        </div>
        <p className="text-sm text-[#627382] my-3">
          Customer is unable to log in to their account. They've tried resetting their password multiple times but still...
        </p>
        <div className="mt-2 flex justify-between">
          <div className="flex gap-4">
            <p className="text-sm text-[#627382]">#1001</p>
            <p className="text-sm text-red-500">HIGH PRIORITY</p>
          </div>
          <div className="flex">
            <p className="text-sm text-[#627382] mr-4">John Smith</p>
            <IoCalendar color="#627382" size={18} />
            <span className="text-sm text-[#627382] ml-1">1/15/2024</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketsCards;
