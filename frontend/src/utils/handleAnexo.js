import { toast } from "react-toastify"
import api from "../services/api"

export default async function handleAnexo(e) {

    let form = new FormData()
    form.append("file", e.target[0].files[0], e.target[0].files[0].name)
    form.append("name", e.target[0].files[0].name)
    await api.post("cnab/", form)
        .then((response) => {
            e.target[0].value = ''
            toast.success('Arquivo enviado com sucesso!')
        })
        .catch((err) => {
            toast.error("Ops, algo deu errado!")
        })
}