import handleAnexo from "./handleAnexo"

export default async function handleSubmit(e) {
    e.preventDefault()
    handleAnexo(e)
}

