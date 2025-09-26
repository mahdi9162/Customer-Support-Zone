import React, { use } from 'react';
import Container from '../Container/Container';

import TicketsCards from '../TicketsCards/TicketsCards';
import TaskStatus from '../TaskStatus/TaskStatus';

const CsTickets = ({ thePromise }) => {
  const issuesData = use(thePromise);

  return (
    <>
      <Container>
        <h1 className="mb-4 font-semibold text-xl md:text-2xl px-3 md:px-0">Customer Tickets</h1>
        <div className="flex flex-col-reverse md:flex-row gap-6">
          <div className="px-3 md:px-0 md:w-2/3">
            <div className="grid md:grid-cols-2 gap-4">
              {issuesData.map((issue) => {
                return <TicketsCards issue={issue}></TicketsCards>;
              })}
            </div>
          </div>
          <div className="w-1/3 px-3 md:px-0">
            <TaskStatus></TaskStatus>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CsTickets;
