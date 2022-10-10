import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Assentos from "./Assentos"
import styled from "styled-components"

export default function EscolhaAssentos(props) {
    const [assentos, setAssento] = useState(undefined)
    const { idSessao } = useParams()
    const [assentosSelecionados, setAssentosSelecionados] = useState([])
    /* const [ids, setIds] = useState([]) */
    const [name, setName] =  useState("")
    const [cpf, setCpf] =  useState("")
    const navigate = useNavigate()
    

    function reservarAssento(e){
        e.preventDefault()
        const bodyFilme = {
            nome: assentos.movie.title,
            day: assentos.day.weekday,
            hour: assentos.name
    
        }
        props.setDadosFilmes(bodyFilme) 
        
        const body ={
            ids: assentosSelecionados,
            name: name,
            cpf: cpf
        }
        props.setDados(body)
        
        
        const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', body)
        
        promise.then((res) => {
            console.log(res.data)
        
            
            navigate("/sucesso")
         

        })

        promise.catch((err) => {
            console.log(err.response.data)
        })
           

    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promise.then((res) => {
            console.log(res.data)
            setAssento(res.data)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })
    }, [])

    if (assentos === undefined) {
        return <div>carregandoo </div>
    }



    return (
        <>
            <Subtopo>
                <h2>selecione o(s) assento(s)</h2>
            </Subtopo>
            <TodosAssentos>
                {assentos.seats.map((a) => <Assentos key={a.id} assentosSelecionados={assentosSelecionados} setAssentosSelecionados={setAssentosSelecionados} assento={a} />)}

            </TodosAssentos>
            <ContainerLegendas>
                <Legendas>
                    <StatusSelecionado></StatusSelecionado>
                    <p>Selecionada</p>
                </Legendas>
                <Legendas>
                    <StatusDisponivel></StatusDisponivel>
                    <p>Disponível</p>
                </Legendas>
                <Legendas>
                    <StatusIndisponivel></StatusIndisponivel>
                    <p>Indisponível</p>
                </Legendas>
            </ContainerLegendas>
            <form onSubmit={reservarAssento}>
            <DadosComprador>
                <label htmlFor="name">Nome do comprador:</label>
                <input 
                required
                id ="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="  Digite seu nome..."></input>
                <label htmlFor="cpf">CPF do comprador</label>
                <input 
                required
                id="cpf"
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                placeholder="  Digite seu CPF..."></input>
            </DadosComprador>
            <BotaoReservar type="submit">
            <p>Reservar assento(s)</p>
            </BotaoReservar>
            </form>
            <Rodape>
                <Miniatura>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bJX1gykk8reVpz8vaYc-qYaY18no7rp1Eg&usqp=CAU"></img>
                </Miniatura>
                <div>
                    <h1>{assentos.movie.title}</h1>
                    <h1>{assentos.day.weekday} - {assentos.name}</h1>
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
const ContainerLegendas = styled.div`
    margin-top: 15px;
    padding: 0px 24px;
    box-sizing: border-box;
    width: 375px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`
const Legendas = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    p{
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 400;

    }
`
const StatusSelecionado = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 17px;
    background-color: #1AAE9E;
    border: 1px solid #0E7D71;
    margin-bottom: 5px;
`
const StatusDisponivel = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 17px;
    background-color: #C3CFD9;
    border: 1px solid #7B8B99;
    margin-bottom: 5px;
`
const StatusIndisponivel = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 17px;
    background-color: #FBE192;
    border: 1px solid #F7C52B;
    margin-bottom: 5px;
`
const DadosComprador = styled.div`
    width: 375px;
    padding: 24px 24px;
    box-sizing: border-box;
    
    label{
    font-weight: 400;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 5px;
    }
    
    input{
    color: #AFAFAF;
    font-style: italic;
    border-radius: 3px;
    border: 1px solid #D5D5D5;
    width: 327px;
    height: 51px;
    margin-bottom: 5px;
    }
`
const BotaoReservar = styled.button`
    margin-left: 65px;
    width: 255px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    border: none;

    p{
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
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
const TodosAssentos = styled.div`
    width: 375px;
    padding: 0px 24px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`