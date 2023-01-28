import { Send } from "@mui/icons-material";
import { Button } from "@mui/material";
import handleSubmit from "../utils/handleSubmit";
import { useContext } from "react"
import { EstablishmentContext } from "../contexts/establishmentContext";
import { TransactionContext } from "../contexts/transactionContext";

export default function FormComponent() {
    const { loadEstablishment: setPageEstablishment } = useContext(EstablishmentContext)
    const { loadTransaction: setPageTransaction } = useContext(TransactionContext)

    async function submit(e) {
        await handleSubmit(e)
        setTimeout(
            await setPageEstablishment(), 50
        )
        setTimeout(
            await setPageTransaction(), 5500
        )
    }

    return (
        <form className='formControl' onSubmit={(e) => submit(e)}>
            <Button variant="contained" component="label" id="anexo">
                <input accept=".txt" type="file" id="file" required />
            </Button>
            <Button variant="contained" endIcon={<Send />} type='submit' id='send'>
                Send
            </Button>
        </form>
    )
}