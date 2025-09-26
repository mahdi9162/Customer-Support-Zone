import React, { use } from 'react';
import Container from '../Container/Container';

import TicketsCards from '../TicketsCards/TicketsCards';
import TaskStatus from '../TaskStatus/TaskStatus';

const CsTickets = ({ thePromise }) => {
  const issuesData = use(thePromise);

  return (
    <>
      <Container>
        <h1 className="mb-4 font-semibold text-2xl">Customer Tickets</h1>
        <div className="flex gap-6">
          <div className="w-2/3">

          </div>
          <div className="h-1/3">
            <TaskStatus></TaskStatus>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CsTickets;
