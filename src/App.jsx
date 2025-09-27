import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';
import './App.css';
import Container from './Components/Container/Container';
import CsTickets from './Components/CsTickets/CsTickets';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


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
      <Suspense fallback={'Loading...'}>
        <CsTickets thePromise={thePromise}></CsTickets>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
