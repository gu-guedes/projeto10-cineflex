import axios from "axios"
import { useState, useEffect } from "react"
import Filme from "./Filme"
import styled from "styled-components"
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
            <Subtopo>
                <h2>selecione o filme</h2>
            </Subtopo>
            <ContainerFilmes>
                {filmes.map((img) => <Filme key={img.id} img={img} />)}
            </ContainerFilmes>
        </>
    )
}

const Subtopo = styled.div`
    width: 375px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2{
    color:#293845;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    
    }
`
const ContainerFilmes = styled.div`
    width: 375px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`

