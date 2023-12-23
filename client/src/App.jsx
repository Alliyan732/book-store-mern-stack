import React, {useState, useEffect} from 'react';
import { getTestData } from './api/testApi';
import { getTestDbData } from './api/testApi';
function App() {

  const [data, setData] = useState(null)
  const [dbData, setdbData] = useState([])

  useEffect(() => {
    getApiData();
    getDbApiData();
  },[])


  const getApiData = async () => {
    try {
      const response = await getTestData();
      setData(response.message)
    } catch (error) {
      console.log(error)
    }
  }
  const getDbApiData = async () => {
    try {
      const response = await getTestDbData();
      setdbData(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <h1 className="text-3xl font-bold underline text-center mt-10 mb-10">Response from backend (test data): {data}</h1>
    <h1 className='text-center font-semibold mb-5 text-2xl'>db_test Data:</h1>
    {dbData.map((usersData, index) => (
    <p className='text-center' key={index}>{usersData.email}</p>
  ))}
    </>
  ) 
}

export default App;
