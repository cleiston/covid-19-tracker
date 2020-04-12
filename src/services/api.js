import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const getCountryList = async () => {
    try {
        const countryList = await axios.get(`${url}/countries`);
        return countryList;
    }
    catch (err) {
        return err;
    }
};

export const getCountryInfo = async (country) => {

    const countryUrl = country === "" ? url : `${url}/countries/${country}`;

    try {
        const countryInfo = await axios.get(countryUrl);
        const {confirmed, recovered, deaths, lastUpdate} = countryInfo.data;
        return {
            confirmed: confirmed.value,
            recovered: recovered.value,
            deaths: deaths.value,
            lastUpdate: lastUpdate
        };
    }
    catch (err) {
        return err;
    }
};

export const getDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily/`);
        return data.map(({confirmed, deaths, reportDate}) => ({
            confirmed: confirmed.total,
            deaths: deaths.total,
            date: reportDate
        }));
    } catch (error){
        return error;
    }
};