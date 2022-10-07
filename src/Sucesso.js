import styled from "styled-components"
export default function Sucesso() {
    return (
        <>
        <Subtopo>
            <h2>Pedido feito com sucesso!</h2>
        </Subtopo>
        <ContainerInfos>
            <h2>Filme e sessão</h2>
            <p>Enola Filmes</p>
            <p>Quinta-feira  14:00</p>
            <h2>Ingressos</h2>
            <p>Assento 15</p>
            <p>Assento 16</p>
            <h2>Comprador:</h2>
            <p>Nome: Joae da silva</p>
            <p>CPF: 92184774747</p>
        </ContainerInfos>
        <BotaoReservar>
                <p>Voltar pra Home</p>
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