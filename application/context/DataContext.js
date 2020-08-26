import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'


export const DataContext = createContext()

const DataContextProvider = ({ children }) => {
    const [worldStats, setWorldStats] = useState()
    const [affectedCountries, setAffectedCountries] = useState()

    const getWorldStatistics = () => {
        axios({
            "method": "GET",
            "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "c504a5222fmshe2a3d13657c6e0ep1018ccjsn4c854ec80138",
                "useQueryString": true
            }
        })
            .then((response) => {
                setWorldStats(response.data)
                //console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getAffectedCountries = () => {
        axios({
            "method": "GET",
            "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "c504a5222fmshe2a3d13657c6e0ep1018ccjsn4c854ec80138",
                "useQueryString": true
            }
        })
            .then((response) => {
                //console.log(response.data)
                setAffectedCountries(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getWorldStatistics()
        getAffectedCountries()
    }, [])

    return (
        <DataContext.Provider
            value={{
                worldStats,
                affectedCountries
            }}
        >
            {children}
        </DataContext.Provider>
    )
}


export default DataContextProvider