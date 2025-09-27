import { IoCalendar } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';

const TicketsCards = ({ issue, handleCardProgress }) => {
  const { title, status, description, id, priority, customer, createdAt } = issue;

  const handleCard = (data) => {
    handleCardProgress(data);
  };

  const getPriorityColor = (priority) => {
    if (priority === 'HIGH PRIORITY') {
      return `text-red-600`;
    } else if (priority === 'MEDIUM PRIORITY') {
      return `text-yellow-500`;
    } else {
      return `text-green-600`;
    }
  };

  return (
    <>
      <div onClick={() => handleCard(issue)} className="h-full flex flex-col p-4 shadow-md rounded-xl bg-white">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-sm md:text-base">{title}</h2>
          <p className={`py-1 px-3 rounded-2xl text-sm flex items-center gap-1 ${status === 'Open' ? 'bg-[#B9F8CF]' : 'bg-[#F8F3B9]'}`}>
            <span
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full inline-block ${status === 'Open' ? 'bg-[#02A53B]' : 'bg-[#FEBB0C]'}`}
            ></span>
            {status}
          </p>
        </div>
        <p className="text-sm text-[#627382] flex-1 my-3 line-clamp-3">{description}</p>
        <div className="mt-2 md:flex justify-between">
          <div className="flex items-center justify-between md:justify-baseline gap-4">
            <p className="text-sm text-[#627382]">#{id}</p>
            <p className={`text-sm  ${getPriorityColor(priority)}`}>{priority}</p>
          </div>
          <div className="flex mt-2 justify-between md:justify-baseline">
            <div className="flex items-center gap-1">
              <CgProfile color="#627382" size={18} />
              <p className="text-sm text-[#627382] mr-4">{customer}</p>
            </div>
            <div className="flex">
              <IoCalendar color="#627382" size={18} />
              <span className="text-sm text-[#627382] ml-1">{createdAt}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketsCards;
