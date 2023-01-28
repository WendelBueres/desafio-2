import { useContext } from "react";
import CardTransactionsComponent from "../components/cardTransactions";
import { TransactionContext } from "../contexts/transactionContext";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import LuneComponent from "../components/lune";
import ItemsComponent from "../components/Items";
import AstronautComponent from "../components/astronaut";


export default function TransactionPage() {
    let operations = [{ id: 1, name: 'Débito' }, { id: 2, name: 'Boleto' }, { id: 3, name: 'Financiamento' }, { id: 4, name: 'Crédito' }, { id: 5, name: 'Recebimento Empréstimo' }, { id: 6, name: 'Vendas' }, { id: 7, name: 'Recebimento TED' }, { id: 8, name: 'Recebimento DOC' }, { id: 9, name: 'Aluguel' },]
    const { transactions, pagination, setPagination, count, setLoaded } = useContext(TransactionContext)

    function handlePaginate(e, value) {
        setPagination(value)
        setLoaded(false)
    }

    return (
        <>
            {
                count !== 0 ?
                    <>
                        <div className="Div-transaction">
                            {transactions.map((transaction) => {
                                let resultado = operations.filter((operation) => operation.id === parseInt(transaction.type))
                                return (< CardTransactionsComponent key={transaction.id} id={transaction.id} typeName={resultado[0].name} type={transaction.type} value={transaction.value} establishment={transaction.establishment} date={transaction.date} cpf={transaction.cpf} card={transaction.card} hour={transaction.hour} owner={transaction.owner} />)
                            })}
                        </div>

                        <Stack sx={{ mt: 2, mb: 2 }} spacing={2}>
                            <Pagination count={Math.ceil((count / 8))} page={pagination} onChange={handlePaginate} color="primary" />
                        </Stack>
                    </> : <>
                        <div className="notFound-div">
                            <LuneComponent />
                            <ItemsComponent />
                            <AstronautComponent />
                            <p className="notFound-text">
                                Por enquanto nada por aqui...
                            </p>
                        </div>
                    </>}
        </>

    )
}