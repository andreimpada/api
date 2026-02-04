export async function jsonBodyHandler(request, response) {
    const buffers = []

    for await (const chunk of request) {
        buffers.push(chunk)
    }

    try {

        //concatena os chunk e converte para string.em seguida,converte a string para json.
        request.body = JSON.parse(Buffer.concat(buffers).toString())

    } catch (error) {
        request.body = null
    }
    // define o header de resposta como json.
    response.setHeader("Content-Type", "application/json")
}