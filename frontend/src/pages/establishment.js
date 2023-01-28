import { Pagination, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext } from "react";
import CardEstablishmentComponent from "../components/cardEstablishment";
import { EstablishmentContext } from "../contexts/establishmentContext";


export default function EstablishmentPage() {
    const { establishments, pagination, setPagination, count } = useContext(EstablishmentContext)

    function handlePaginate(e, value) {
        setPagination(value)
    }

    return (
        <>
            {
                establishments.length > 0 ?
                    <>
                        < div className="Div-establishment" >
                            {(establishments.map((establishment) => <CardEstablishmentComponent key={establishment.id} id={establishment.id} name={establishment.name} balance={establishment.balance} setPagination={setPagination} />))
                            }
                        </div >
                        <Stack sx={{ mt: 2, mb: 2 }} spacing={2}>
                            <Pagination count={Math.ceil((count / 8))} page={pagination} onChange={handlePaginate} color="primary" />
                        </Stack>
                    </>
                    : <>
                        <Typography sx={{ fontSize: 17, display: 'flex', height: '100%', alignItems: 'center' }}>
                            Por enquanto nada aqui...
                        </Typography>
                    </>
            }
        </>)
} 