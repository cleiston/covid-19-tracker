import React from 'react';
import './styles.css';

export default function ChooseCountry({countryList, handleCountryChange}) {

    return (
        <form>
            <select defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countryList.map((country, i) => 
                    (<option 
                        key={i} 
                        value={country.name}>{country.name}
                    </option>)
                )}
            </select>
        </form>
    );

}