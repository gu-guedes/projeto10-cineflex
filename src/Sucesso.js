import styled from "styled-components"
import { Link } from "react-router-dom"
export default function Sucesso(props) {
    function zerarPedido(){
        props.setAssentosSelecionados([])
        props.setNomes([])
        props.setDados({})
        props.setDadosFilmes({})

    }
    return (
        <>
        <Subtopo>
            <h2>Pedido feito com sucesso!</h2>
        </Subtopo>
        <ContainerInfos>
            <h2 >Filme e sessão</h2>
            <p data-identifier="movie-session-infos-reserve-finished">{props.dadosFilmes.nome}</p>
            <p data-identifier="movie-session-infos-reserve-finished">{props.dadosFilmes.day} {props.dadosFilmes.hour}</p>
            <h2>Ingressos</h2>
            {props.nomes.map((n) => <p>Assento {n}</p>)}
            <h2>Comprador:</h2>
            <p data-identifier="buyer-infos-reserve-finished">Nome: {props.dados.name}</p>
            <p >CPF: {props.dados.cpf}</p>
        </ContainerInfos>
        <BotaoReservar>
                <Link to="/"><p onClick={zerarPedido} data-identifier="back-to-home-btn">Voltar pra Home</p></Link>
            </BotaoReservar>

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
    color:#247A6B;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    width: 170px;
    text-align: center;
    
    }
`
const ContainerInfos = styled.div`
    
    width: 375px;
    padding: 0px 28px;
    box-sizing: border-box;
    h2{
        color:#293845;
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        margin-bottom: 15px;
        margin-top: 25px;

    }
    p{
        color:#293845;
        font-size: 22px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
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
    margin-top: 100px;

    p{
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    }
`