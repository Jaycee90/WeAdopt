import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import AdoptingForm from './components/AdoptingForm'
import Table from './components/Table'

function App() {
  const [adopt, setAdopt] = useState("")
  const [isLoading, setisLoading] = useState(true)

  useEffect( () => {
    fetchData()
    console.log(adopt);
  }, [])

  const fetchData = async () => {
    try{
      const response = await axios.get("http://127.0.0.1:8000/api/adopt/")
      setAdopt(response.data)
      setisLoading(false)
    }catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='bg-indigo-100 px-8 min-h-screen'>
      <nav className='pt-8'>
        <h1 className='text-5xl text-center pb-12'> Available Kids to Adopt</h1>
      </nav>
      <AdoptingForm 
      setAdopt = {setAdopt} 
      fetchData = {fetchData}
      />
      <Table
        adopt = {adopt}
        setAdopt = {setAdopt} 
        isLoading  = {isLoading}
      />
    </div>
  )
}

export default App
