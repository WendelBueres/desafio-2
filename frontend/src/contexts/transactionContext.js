import { createContext, useEffect, useState } from "react";
import api from "../services/api";


export const TransactionContext = createContext()

export function TransactionProvider({ children }) {
    const [loaded, setLoaded] = useState(false)
    const [transactions, setTransactions] = useState([])
    const [count, setCount] = useState(0)
    const [pagination, setPagination] = useState(1)

    async function loadTransaction() {
        if (loaded === false) {
            setTransactions([])
            let data = await api.get(`transactions/?page=${pagination}`)
            setTransactions(data.data.results)
            setCount(data.data.count)
            setLoaded(true)
        }
        setTimeout(async () => {
            let data = await api.get(`transactions/?page=${pagination}`)
            setTransactions(data.data.results)
            setCount(data.data.count)
        }, 500)
    }

    async function changePagination() {
        loadTransaction()
    }

    useEffect(() => {
        changePagination()
    }, [pagination])

    return (
        <TransactionContext.Provider value={{ transactions, setTransactions, pagination, setPagination, loadTransaction, count, setLoaded }}>
            {children}
        </TransactionContext.Provider>
    )

}