import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Sessoes(dias) {
    return (
        <>
            <Sessao>
                <p data-identifier="session-date"> {dias.dias.weekday} - {dias.dias.date}</p>
                <Horarios>
                    <Link to={`/assentos/${dias.dias.showtimes[0].id}`}>
                        <button data-identifier="hour-minute-btn" >{dias.dias.showtimes[0].name}</button>
                        </Link>
                    <Link to={`/assentos/${dias.dias.showtimes[1].id}`}>
                        <button data-identifier="hour-minute-btn" >{dias.dias.showtimes[1].name}</button>
                        </Link>
                </Horarios>
            </Sessao>
        </>
    )
}

const Sessao = styled.div`
    margin-left: 24px;
    font-family: 'Roboto', sans-serif;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Horarios = styled.div`
button{
    font-family: 'Roboto', sans-serif;
    width: 82px;
    height: 43px;
    font-size: 18px;
    background-color: #E8833A;
    color: white;
    border-radius: 3px;
    border: solid #E8833A;
    margin-left: 5px;
}

`