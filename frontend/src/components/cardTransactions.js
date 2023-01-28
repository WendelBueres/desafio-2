import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function CardTransactionsComponent({ id, establishment, type, typeName, date, value, cpf, card, hour, owner }) {
    let value_format = value
    value_format = parseFloat(value_format)
    value_format = value_format.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
    let date_formated = new Date(Date(date))
    return (
        <Card sx={{ "width": "40vw", "padding": '10px', "border": '2px solid grey' }}>
            <CardContent sx={{ 'display': 'flex', 'flexDirection': 'column', 'paddingTop': 0, 'paddingBottom': 0 }}>
                <CardContent sx={{ "display": 'flex', "flexDirection": 'row', "justifyContent": "space-between" }}>
                    <Typography sx={{ "fontSize": 14 }} className="id">
                        Transação ID: {id}
                    </Typography>
                    <Typography sx={{ "fontSize": 14 }}>
                        {date_formated.toLocaleDateString('pt-BR')} - {hour}
                    </Typography>
                </CardContent>
                <Typography sx={{ "fontSize": 14, color: 'black', fontWeight: 700 }}>
                    Cartão: {card}
                </Typography>
                {parseInt(type) === 1 || parseInt(type) === 4 || parseInt(type) === 5 || parseInt(type) === 6 || parseInt(type) === 7 || parseInt(type) === 8 ?
                    <Typography sx={{ "color": "green" }} variant="h5" component="div">{typeName}</Typography> : <Typography sx={{ "color": "red" }} variant="h5" component="div">{typeName}</Typography>
                }
                <Typography variant="body2" className='value'>
                    Valor: {value_format}
                </Typography>
            </CardContent>
            <CardContent sx={{ "display": 'flex', "flexDirection": 'column', "justifyContent": "space-between" }}>
                <Typography sx={{ "fontSize": 15, fontWeight: 600, textDecoration: "underline" }}>
                    CLIENTE
                </Typography>
                <Typography sx={{ "fontSize": 14 }}>
                    {owner}
                </Typography>
                <Typography sx={{ "fontSize": 14 }}>
                    CPF {cpf}
                </Typography>
            </CardContent>
        </Card>
    )
}