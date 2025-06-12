import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AdoptingForm from './components/AdoptingForm';
import DonationForm from './components/DonationForm';
import DonationTable from './components/DonationTable';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Table from './components/Table';


function App() {
  const [adopt, setAdopt] = useState("")
  const [isLoading, setisLoading] = useState(true)
  const [gift, setGift] = useState("")

  useEffect( () => {
    fetchData()
    console.log(adopt);
  }, [])

  const fetchData = async () => {
    try{
      // const response = await axios.get("http://127.0.0.1:8000/api/adopt/")
      
      const [adoptResponse, donateResponse] = await Promise.all([
        axios.get("http://127.0.0.1:8000/api1/adopt/"),
        axios.get("http://127.0.0.1:8000/api2/donate/")
      ]);
      setAdopt(adoptResponse.data)
      setGift(donateResponse.data)
      setisLoading(false)
    }catch (error) {
      console.log(error);
    }
  }

  return (
    <Router>
      <Navbar />
      <div className='bg-indigo-100 px-8 min-h-screen'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/adopt" element={
            <>
              <nav className='pt-8'>
                <h1 className='text-5xl text-center pb-12'> Available Kids to Adopt</h1>
              </nav>
              <AdoptingForm setAdopt = {setAdopt} fetchData = {fetchData} />
              <Table adopt = {adopt} setAdopt = {setAdopt} isLoading  = {isLoading} />
            </>
          } />


          <Route path="/donate" element={
            <>
              <nav className='pt-8'>
                <h1 className='text-5xl text-center pb-5'> Donation List</h1>
                <h2 className='text-1xl text-center pb-12'> Give me your hand so that I can grow up and take action.</h2>
              </nav>

              < DonationForm setGift = {setGift} fetchData = {fetchData} />
              <DonationTable gift = {gift} setGift ={setGift} isLoading  = {isLoading} />
            </>
          } />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
