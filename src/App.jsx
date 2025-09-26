import { Suspense } from 'react';
import './App.css';
import Container from './Components/Container/Container';
import CsTickets from './Components/CsTickets/CsTickets';
import Navbar from './Components/Navbar/Navbar';
import OutputBox from './Components/OutputBox/OutputBox';
import TaskStatus from './Components/TaskStatus/TaskStatus';

const fetchData = async () => {
  const res = await fetch('/tickets.json');
  return res.json();
};
const thePromise = fetchData();
function App() {
  return (
    <>
      <Container></Container>
      <Navbar></Navbar>
      <OutputBox></OutputBox>
      <Suspense fallback={'Loading...'}>
        <CsTickets thePromise={thePromise}></CsTickets>
      </Suspense>
      
    </>
  );
}

export default App;
