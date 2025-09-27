import React, { use } from 'react';
import Container from '../Container/Container';

import TicketsCards from '../TicketsCards/TicketsCards';
import TaskStatus from '../TaskStatus/TaskStatus';
import ResolvedTask from '../Resolved Task/ResolvedTask';
import { useState } from 'react';

const CsTickets = ({ thePromise }) => {
  const issuesData = use(thePromise);
  const [issues, setIssues] = useState(issuesData);

  const handleCardProgress = (clickData) => {
    const changeData = issues.map((issue) => {
      if (issue.id === clickData.id) {
        return { ...clickData, status: 'In-Progress' };
      } else {
        return issue;
      }
    });
    setIssues(changeData);
  };

  return (
    <>
      <Container>
        <h1 className="text-start mb-4 font-semibold text-xl md:text-2xl px-3 md:px-0">Customer Tickets</h1>
        <div className="flex flex-col-reverse md:flex-row gap-6">
          <div className="px-3 md:px-0 md:w-2/3">
            <div className="grid md:grid-cols-2 gap-4">
              {issues.map((issue) => {
                return <TicketsCards key={issue.id} issue={issue} handleCardProgress={handleCardProgress}></TicketsCards>;
              })}
            </div>
          </div>
          <div className="md:w-1/3 px-3 md:px-0">
            <TaskStatus></TaskStatus>
            <ResolvedTask></ResolvedTask>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CsTickets;
