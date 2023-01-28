import { Pagination, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useContext } from "react";
import CardEstablishmentComponent from "../components/cardEstablishment";
import { EstablishmentContext } from "../contexts/establishmentContext";
import Astronaut from "../components/astronaut";
import Items from "../components/Items";
import LuneComponent from "../components/lune";


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
                        <div className="notFound-div">
                            <LuneComponent />
                            <Items />
                            <Astronaut />
                            <p className="notFound-text">
                                Por enquanto nada por aqui...
                            </p>
                        </div>
                    </>
            }
        </>)
} 