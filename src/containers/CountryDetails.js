import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMode } from '../shared/helpers/helpers';
import { Img, Details, Btn } from '../styled/styled';
import CountryInfo from '../components/CountryInfo';

const CountryDetails = ({ countries, toggleTheme, theme }) => {
    const [country, setCountry] = useState();
    let history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const findCountry = countries.find(country => country.alpha3Code === id);
        setCountry(findCountry);
    }, [countries, id]);
    
    const handleBack = () => history.goBack();
    const handleBackToAll = () => history.push('/');
    
    let showCountry = false;
    
    if (country) {
        showCountry = true;
    }

    const displayMode = getMode(theme);

    return (showCountry ? 
            <Details key={country.alpha3Code}>
                <Img src={country.flag} alt="Country flag"/>
                <h3>{country.name}</h3>
                <CountryInfo capital={country.capital} subregion={country.subregion} population={country.population} borders={country.borders} />
                <Btn onClick={handleBackToAll}>Back to all</Btn>
                <Btn onClick={handleBack}>Back</Btn>
                <Btn onClick={toggleTheme}>{displayMode}</Btn>
            </Details> : <p>loading...</p>
    );
}


export default CountryDetails;