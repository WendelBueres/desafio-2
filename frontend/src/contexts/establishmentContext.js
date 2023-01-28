import { createContext, useEffect, useState } from "react";
import api from "../services/api";


export const EstablishmentContext = createContext()

export function EstablishmentProvider({ children }) {
    const [loaded, setLoaded] = useState(false)
    const [pagination, setPagination] = useState(1)
    const [count, setCount] = useState(0)
    const [establishments, setEstablishments] = useState([])

    async function loadEstablishment() {
        if (loaded === false) {
            let data = await api.get(`establishments/?page=${pagination}`)
            setEstablishments(data.data.results)
            setCount(data.data.count)
            setLoaded(true)
        }
        setTimeout(async () => {
            let data = await api.get(`establishments/?page=${pagination}`)
            setCount(data.data.count)
            setEstablishments(data.data.results)
        }, 1000)
    }

    useEffect(() => {
        setLoaded(false)
        loadEstablishment()
    }, [])

    return (
        <EstablishmentContext.Provider value={{ establishments, setEstablishments, setPagination, loadEstablishment, count }}>
            {children}
        </EstablishmentContext.Provider>
    )

}