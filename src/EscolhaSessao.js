import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import Sessoes from "./Sessoes"
import styled from "styled-components"


export default function EscolhaSessao(){
    const[sessao, setSessao] = useState(undefined)
    const {idFilme} = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

        promise.then((res) => {
            setSessao(res.data)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })
    }, [])

    if(sessao === undefined){
        return <div>carregandooo</div>
    }

    return(
        <>
         <Subtopo>
            <h2>selecione o horário</h2>
        </Subtopo>
        {sessao.days.map((dias)  => <Sessoes key={dias.id} dias={dias}/>)}
        <Rodape>
            <Miniatura>
                <img data-identifier="movie-img-preview" src={sessao.posterURL}></img>
            </Miniatura>
            <div>
            <h1>{sessao.title}</h1>
            <h1></h1>
            </div>

        </Rodape>
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
const Rodape = styled.div`
    position: fixed;
    bottom: 0;
    width: 375px;
    height: 117px;
    background-color: #DFE6ED;
    padding: 14px 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    div > h1{
        margin-left: 14px;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-weight: 400;
    color: #293845;
    }
`
const Miniatura = styled.div`
    width: 64px;
    height: 89px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
    width: 48px;
    height: 72px;
    }
`
/* const Resumo = styled.div`
    margin-left: 14px;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-weight: 400;
    color: #293845;
` */