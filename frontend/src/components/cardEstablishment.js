import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function CardEstablishmentComponent({ id, name, balance, setPagination }) {
    let balance_format = balance
    balance_format = parseFloat(balance_format)
    balance_format = balance_format.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
    return (
        <Card sx={{ width: "40vw", padding: '10px', border: '2px solid grey' }}>
            <CardContent sx={{ 'display': 'flex', 'flexDirection': 'column', 'paddingTop': 0, 'paddingBottom': 0 }}>
                <Typography sx={{ fontSize: 14 }} className="id">
                    ID: {id}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                {balance < 0 &&
                    <Typography sx={{ color: 'red' }} variant="body2" className='balance'>
                        Saldo: {balance_format}
                    </Typography>
                }
                {balance >= 0 &&
                    <Typography sx={{ color: 'green' }} variant="body2" className='balance'>
                        Saldo: {balance_format}
                    </Typography>
                }
            </CardContent>
        </Card>
    )
}