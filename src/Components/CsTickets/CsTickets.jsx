import React, { use } from 'react';
import Container from '../Container/Container';
import TicketsCards from '../TicketsCards/TicketsCards';
import TaskStatus from '../TaskStatus/TaskStatus';
import ResolvedTask from '../Resolved Task/ResolvedTask';
import { useState } from 'react';
import OutputBox from '../OutputBox/OutputBox';

const CsTickets = ({ thePromise }) => {
  const issuesData = use(thePromise);
  const [issues, setIssues] = useState(issuesData);

  const handleCardProgress = (clickData) => {
    if (clickData.status !== 'Open') {
      return;
    }
    const progressData = issues.map((issue) => {
      if (issue.id === clickData.id) {
        return { ...issue, status: 'In-Progress', statusChangedAt: new Date() };
      } else {
        return issue;
      }
    });
    setIssues(progressData);
  };

  // Complete Data
  const completeData = (compData) => {
    const resolvedData = issues.map((issue) => {
      if (issue.id === compData.id) {
        return { ...compData, status: 'Resolved' };
      } else {
        return issue;
      }
    });
    setIssues(resolvedData);
  };

  const removeData = (data) => {
    const otherData = issues.filter((ele) => ele.id !== data.id);
    setIssues(otherData);
  };

  return (
    <>
      <Container>
        <OutputBox issues={issues}></OutputBox>
        <h1 className="text-start mb-4 font-semibold text-xl md:text-2xl px-3 md:px-0">Customer Tickets</h1>
        <div className="flex flex-col-reverse md:flex-row gap-6">
          <div className="px-3 md:px-0 md:w-2/3">
            <div className="grid md:grid-cols-2 gap-4">
              {issues
                .filter((issue) => issue.status !== 'Resolved')
                .map((issue) => {
                  return <TicketsCards key={issue.id} issue={issue} handleCardProgress={handleCardProgress}></TicketsCards>;
                })}
            </div>
          </div>
          <div className="md:w-1/3 px-3 md:px-0">
            <TaskStatus issues={issues} completeData={completeData}></TaskStatus>
            <ResolvedTask issues={issues} removeData={removeData}></ResolvedTask>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CsTickets;
