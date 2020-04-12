import React from 'react';
import {useState, useEffect} from 'react';
import {getCountryList, getDailyData, getCountryInfo} from './services/api';
import ChooseCountry from './components/ChooseCountry';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import SimpleCard from './components/SimpleCard';
import Header from './components/Header';
import './App.css';

/**
 * Developed by Cleiston Rodrigues
 * Email: cleistonrs@gmail.com
 * Github: github.com/cleiston
 */

function App() {

  const [countryList, setCountryList] = useState([]);
  const [countryInfo, setCountryInfo] = useState('');
  const [country, setCountry] = useState('');
  const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const getInfo = async() => {
          const info = await getCountryInfo(country);
          setCountryInfo(info);
        }
    
        getInfo();
      }, [country])

    useEffect(() => {
        const getData = async () => {
            const data = await getDailyData();
            setDailyData(data);
        };

        getData();
    }, [])

  useEffect(() => {

    const getCountries = async () => {
      const list = await getCountryList();
      setCountryList(list.data.countries);
    } 

    getCountries();
  }, []);

  const handleCountryChange = (country) => {
    setCountry(country);
  };

  return (
    <>    
      <Header />
      <SimpleCard countryInfo={countryInfo} country={country} />
      <ChooseCountry countryList={countryList} handleCountryChange={handleCountryChange} />
      {country === "" ? <LineChart dailyData={dailyData} /> : <BarChart country={country} countryInfo={countryInfo} />}
    </>
  );
}

export default App;
