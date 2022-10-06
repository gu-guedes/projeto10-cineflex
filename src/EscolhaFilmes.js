import axios from "axios"
import { useState, useEffect } from "react"
import Filme from "./Filme"
export default function EscolhaFilmes() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies'
        const promise = axios.get(URL)

        promise.then((resposta) => {
            setFilmes(resposta.data)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })
    }, [])

    if(filmes.length === 0){
        return <div> Carregandooo</div>
    }

    return (
        <>
            <div className="subtopo">
                <h2>selecione o filme</h2>
            </div>
            <div className="container-filmes">
                {filmes.map((img) => <Filme key={img.id} img={img} />)}
            </div>
        </>
    )
}