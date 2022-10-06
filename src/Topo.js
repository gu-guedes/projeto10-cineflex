import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Topo() {
    return (
        <Link to="/">
            <BarraSuperior>
                <h1>CINEFLIX</h1>
            </BarraSuperior>
        </Link>
    )
}

const BarraSuperior = styled.div`
    background-color: #C3CFD9;
    width: 375px;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    font-weight: 400;
    }

`